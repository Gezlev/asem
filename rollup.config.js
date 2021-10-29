import { terser } from 'rollup-plugin-terser';
//import scss from 'rollup-plugin-scss';

export default {
    input: './static/dev/js/app.js',

    watch: {
        include: './static/dev/js/*/**',
        clearScreen: false
    },

    plugins: [
        terser(),
        // scss({
        //     include: ['./static/dev/scss/**/*.scss'],
        //     sass: require('node-sass'),
        //     output: './static/build/css/style.css',
        //     outputStyle: 'compressed',
        //     failOnError: true,
        // })
    ],

    output: {
        file: './static/build/js/app.js',
        format: 'iife'
    }
};
