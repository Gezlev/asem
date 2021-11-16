const dataset = {
    dates: ["11-11-2021","12-11-2021","13-11-2021","14-11-2021","15-11-2021","16-11-2021","17-11-2021"],
    ee: ['3201.34','3167.1','2928.08','3092.35','4313.37','56','112'],
}

const BlockAnalysis = () => {
    const range = document.querySelector('.block-analysis--filters__range');
    let rangepicker = new DateRangePicker(range, {});

    let chartDom = document.querySelector('.block-analysis--chart');
    var myChart = echarts.init(chartDom);
    var option;

    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '0',
            right: '0'
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            show: false
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                // prettier-ignore
                data: ['11-11-2021', '12-11-2021', '13-11-2021', '14-11-2021', '15-11-2021', '16-11-2021', '17-11-2021', '18-11-2021', '19-11-2021', '20-11-2021', '21-11-2021', '22-11-2021']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Evaporation',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: 'Precipitation',
                min: 0,
                max: 250,
                position: 'right',
                offset: 80,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'Precipitation',
                type: 'bar',
                yAxisIndex: 1,
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 2,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    option && myChart.setOption(option);

};

export default BlockAnalysis;
