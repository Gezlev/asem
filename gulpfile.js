const gulp = require('gulp');
const { series, parallel } = gulp;
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const svgmin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

const styles = () => {
    return gulp.src('./static/dev/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(csscomb())
        .pipe(csso())
        .pipe(gulp.dest('./static/build/css/'));
};

const svgSpriteBuild = () => {
    return gulp.src('./static/dev/svg-sprite/*.svg')
        .pipe(svgmin({
            multipass: true,
            js2svg: {
                pretty: true,
                indent: 2,
            },
            plugins: [
                'sortAttrs',
                {
                    removeDoctype: true
                },
                {
                    removeComments: true
                },
                {
                    cleanupNumericValues: {
                        floatPrecision: 2
                    }
                },
                {
                    convertColors: {
                        names2hex: false,
                        rgb2hex: false
                    }
                },
                {
                    name: 'cleanupIDs',
                    params: {
                        minify: true,
                    }
                },
            ]
        }))
        .pipe(cheerio({
            run: function ($) {
                $('stroke').remove();
                $('style').remove();
                $('class').remove();
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                view: {
                    sprite: "sprite-view.svg"
                },
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('./static/build/svg/'));
};

const watch = () => {
    gulp.watch('./static/dev/scss/**/*.scss', styles)
};

exports.svgSprite = series(svgSpriteBuild);

exports.devStyles = series(
    parallel(styles),
    parallel(watch)
);
