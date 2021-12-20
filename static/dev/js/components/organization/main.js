import JSTable from "../../modules/jstable";
import AsemTooltip from "../../modules/tooltip";
import Splide from '../../modules/slider';

const OrgMain = () => {

    const LineChart = () => {
        let currentsLineDom = document.querySelector('.org--currents__plot');
        if (!currentsLineDom) return;
        let lineSet = JSON.parse(currentsLineDom.dataset.chart);
        let lineOptions = {
            tooltip: {
                trigger: 'axis',
                renderMode: 'html',
                axisPointer: {
                    type: 'line'
                },
                className: '',
                appendToBody: false,
                formatter: params => {
                    return false;
                }
            },
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: false,
                tooltip: {
                    show: false
                },
            },
            toolbox: {
                show: false
            },
            legend: {
                show: false
            },
            xAxis: {
                type: 'category',
                show: false,
                boundaryGap: false,
                data: lineSet.dates
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    name: 'Сер. темп.',
                    type: 'line',
                    data: lineSet.values,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: '#4694ff',
                            width: 2,
                        }
                    },
                    showSymbol: false,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#4694ff'
                            },
                            {
                                offset: 1,
                                color: 'rgba(70, 148, 255, 0)'
                            }
                        ])
                    },
                }
            ]
        };
        let currentsLine = echarts.init(currentsLineDom);
        currentsLine.setOption(lineOptions);
    };
    LineChart();


    const BarChart = () => {
        let currentsBarDom = document.querySelector('.org--currents__bar');
        if (!currentsBarDom ) return;

        let months = ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'];
        let barSet = JSON.parse(currentsBarDom.dataset.chart);
        let barOptions = {
            tooltip: {},
            grid: {
                top: 20,
                left: 30,
                right: 0,
                bottom: 20,
                show: false
            },
            toolbox: {},
            legend: {
                show: false
            },
            xAxis: {
                type: 'category',
                data: barSet.dates,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: (value, index) => {
                        let date = new Date(value);
                        return months[date.getMonth()] + ' ' + date.getFullYear();
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(150,150,150,0.5)',
                        type: [1, 4],
                        dashOffset: 5
                    }
                }
            },
            series: [
                {
                    name: 'Температура в приміщеннях',
                    type: 'bar',
                    data: barSet.home,
                    itemStyle: {
                        color: localStorage.getItem('theme') === 'dark' ? '#315b96' : '#304156'
                    },
                    barMaxWidth: 20,
                    barMinWidth: 10
                },
                {
                    name: 'Зовнішня температура',
                    type: 'bar',
                    data: barSet.outer,
                    itemStyle: {
                        color: '#8cd31a'
                    },
                    barMaxWidth: 20,
                    barMinWidth: 10,
                    barGap: '-30%',
                    z: 3
                },
                {
                    name: 'Відносна норма',
                    type: 'bar',
                    data: barSet.norm,
                    itemStyle: {
                        color: '#c6dfff'
                    },
                    barMaxWidth: 20,
                    barMinWidth: 10
                }
            ]
        };
        let currentsBar = echarts.init(currentsBarDom);
        currentsBar.setOption(barOptions);
    };
    BarChart();

    const Sources = () => {
        let sourceList = document.querySelector('#source-list');
        if (!sourceList) return;
        sourceList.querySelectorAll('.tooltip').forEach(el => AsemTooltip.init(el));
        let sourceTable = new JSTable(sourceList, {
            searchable: false,
            perPage: 100
        });
    };
    Sources();



    const Map = () => {
        let container = document.querySelector('#orgmap');
        if (!container) return;

        let wrapper = container.parentElement;
        let map;
        let options = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ebebeb"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c0c0c0"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
        let coords = container.dataset.coords;
        coords = coords ? coords.split(';') : false;
        if (!coords || coords.length !== 2) coords = false;

        window.initOrgMap = () => {
            map = new google.maps.Map(container, {
                center: coords ? { lat: Number(coords[0]), lng: Number(coords[1]) } : { lat: 50.45095087, lng: 30.52260070 },
                zoom: 14,
                disableDefaultUI: true,
                styles: options
            });
            if (coords) {
                new google.maps.Marker({
                    position: { lat: Number(coords[0]), lng: Number(coords[1]) },
                    map,
                    icon: "/static/build/img/icon-map-marker.svg"
                });
            }
        };

        let zoomIn = wrapper.querySelector('.org--map__zoomin');
        zoomIn && zoomIn.addEventListener('click', () => {
            map.setZoom(map.getZoom() + 1);
        }, {passive: true});
        let zoomOut = wrapper.querySelector('.org--map__zoomout');
        zoomOut && zoomOut.addEventListener('click', () => {
            map.setZoom(map.getZoom() - 1);
        }, {passive: true});
        let fullScreen = wrapper.querySelector('.org--map__zoom');
        fullScreen && fullScreen.addEventListener('click', () => {
            const element = map.getDiv().firstChild;
            map.scaleControl = true;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullScreen) {
                element.msRequestFullScreen();
            }
        }, {passive: true});

        const LoadLib = () => {
            let script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDd-qx1Hk3NRKfwVnku98-drq7-tw1P_KI&callback=initOrgMap&v=weekly';
            //script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAY0xtjk9QZj7ga5QM7oqeDRkDCZf1Oklc&callback=initOrgMap&v=weekly';
            document.head.append(script);
        };
        LoadLib();
    }
    Map();

    const Slider = () => {
        if (!document.querySelector('.org--main__sidebar .splide')) return;
        const slider = new Splide('.org--main__sidebar .splide', {
            gap: 6,
            arrows: false
        });
        slider.mount();
    }
    Slider();

    const Gallery = () => {
        let slides = document.querySelectorAll('.splide__slide img');
        if (!slides.length) return;

        let popup = false;
        let gallerySlider;

        const initPopup = () => {
            popup = document.createElement('div');
            popup.className = 'gallery-popup';
            popup.innerHTML = `
                <div class="gallery-popup__container">
                    <div class="splide">
                        <div class="splide__track">
                            <ul class="splide__list"></ul>
                        </div>
                    </div>
                </div>
                <div class="gallery-popup__close"><span></span><span></span></div>`;
            document.body.append(popup);
            popup.querySelector('.gallery-popup__close').addEventListener('click', hidePopup, false);
        }

        const hidePopup = () => {
            popup.classList.remove('visible');
            setTimeout( () => {
                let slider = popup.querySelector('.splide');
                slider.style.transform = "translate3d(0,0,0)";
                gallerySlider.destroy();
            }, 1000);
        };

        const showSlider = items => {
            if (!popup) initPopup();
            popup.querySelector('.gallery-popup__container .splide__list').innerHTML = items;
            popup.classList.add('visible');
            gallerySlider = new Splide('.gallery-popup__container .splide', {});
            gallerySlider.mount();
        };

        let items = '';
        for (let i = 0; i < slides.length; i++) {
            items += `<li class="splide__slide"><img src="${slides[i].dataset.origin}" decoding="async" loading="lazy" /></li>`;
            slides[i].addEventListener('click', () => {
                showSlider(items);
            }, false);
        }
    };
    Gallery();

    return false;
};

export default OrgMain;
