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

    option = {
        tooltip: {
            trigger: 'axis',
            renderMode: 'html',
            axisPointer: {
                type: 'line'
            },
            className: 'block-analysis--chart__tooltip',
            appendToBody: true,
            formatter: params => {
                let tooltip = '<strong>' + params[0]['axisValueLabel'] + '</strong>';
                params.forEach( el => {
                    let className = el.seriesType === 'line' ? ' class="emptyCircle"' : '';
                    let color = el.seriesType === 'line' ? el.borderColor : el.color;
                    tooltip += '<div><span style="color:' + color + '"' + className + '></span> ' + el.seriesName + ' — '+ el.value + '</div>';
                });
                return tooltip;
            }
        },
        grid: {
            top: 20,
            left: 165,
            right: 40,
            bottom: 20,
            containLabel: true,
            tooltip: {
                show: true
            },
        },
        toolbox: {
            show: true
        },
        legend: {
            show: false
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#c0c0c7',
                    }
                },
                axisTick: {
                    show: false
                },
                data: ['11-11-2021', '12-11-2021', '13-11-2021', '14-11-2021', '15-11-2021', '16-11-2021', '17-11-2021', '18-11-2021', '19-11-2021', '20-11-2021', '21-11-2021', '22-11-2021', '23-11-2021', '24-11-2021']
            }
        ],
        yAxis: [
            {
                type: 'value',
                position: 'left',
                offset: 110,
                boundaryGap: false,
                name: 'Потужність (МВт)',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 0,
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    color: '#c0c0c7',
                    align: 'center',
                    verticalAlign: 'bottom',
                    padding: [0,0,8,10]
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0c0c7'
                    }
                },
                axisLabel: {
                    lineHeight: 20,
                    margin: -20,
                    padding: 0,
                    formatter: value => value/1000
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
            },
            {
                type: 'value',
                position: 'left',
                offset: 55,
                boundaryGap: false,
                name: 'Електроенергія (Вт*год)',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 0,
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    color: '#c0c0c7',
                    align: 'center',
                    verticalAlign: 'bottom',
                    padding: [0,0,8,10]
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0c0c7'
                    }
                },
                axisLabel: {
                    lineHeight: 20,
                    margin: -24,
                    padding: 0,
                    formatter: value => value * 1000
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
            },
            {
                type: 'value',
                position: 'left',
                offset: 0,
                boundaryGap: false,
                name: 'Теплова енергія (Гкал)',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 0,
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    color: '#c0c0c7',
                    align: 'center',
                    verticalAlign: 'bottom',
                    padding: [0,0,8,10]
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0c0c7'
                    }
                },
                axisLabel: {
                    lineHeight: 20,
                    margin: -24,
                    padding: 0,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
            },
            {
                type: 'value',
                position: 'right',
                offset: 60,
                boundaryGap: false,
                name: 'Вода (м3)', // Холодна вода
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 0,
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    color: '#c0c0c7',
                    align: 'center',
                    verticalAlign: 'bottom',
                    padding: [0,0,8,10]
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0c0c7'
                    }
                },
                axisLabel: {
                    lineHeight: 20,
                    margin: 8,
                    padding: 0,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#c0c0c7',
                        opacity: 0.5
                    }
                },
            },
            {
                type: 'value',
                position: 'right',
                offset: 0,
                boundaryGap: false,
                name: 'Технологічні температури (°C)', // T1
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 0,
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    color: '#c0c0c7',
                    align: 'center',
                    verticalAlign: 'bottom',
                    padding: [0,0,8,10]
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0c0c7'
                    }
                },
                axisLabel: {
                    lineHeight: 20,
                    margin: 8,
                    padding: 0,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
            },
            {
                type: 'value',
                name: 'ГВП',
                show: false,
            },
            {
                type: 'value', // T2
                show: false,
            },
        ],
        series: [
            {
                name: 'p',
                type: 'line',
                data: [0.016, 0.015, 0.017, 0.019, 0.018, 0.016, 0.014, 0.015, 0.017, 0.018, 0.019, 0.019, 0.021, 0.026],
                yAxisIndex: 1,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#fadf33',
                        width: 3,
                    }
                },
                itemStyle: {
                    color: '#FFFFFF',
                    borderWidth: 3,
                    borderColor: '#fadf33',
                },
                symbol: 'circle',
                symbolSize: 10,
                emphasis: {
                    itemStyle: {
                        color: '#fadf33',
                        borderWidth: 4,
                        borderColor: '#FFFFFF',
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowBlur: 10,
                        shadowOffsetY: 4,
                    },
                },
            },
            {
                name: 'Електроенергія',
                type: 'bar',
                data: [3220, 3080, 3200, 3360, 3613, 3723, 4652, 4100, 3480, 2538, 3280, 3300, 3900, 4100],
                barWidth: 4,
                barMaxWidth: 6,
                barMinWidth: 2,
                barGap: '150%',
                itemStyle: {
                    color: '#ff974a',
                    borderRadius: [3, 3, 0, 0]
                }
            },
            {
                name: 'Теплова енергія',
                type: 'bar',
                data: [3.22, 3.28, 3.2, 3.56, 2.9, 3.03, 4.6, 0.9, 2.4, 2.5, 2.8, 3.3, 3.6, 3.1],
                yAxisIndex: 3,
                barWidth: 6,
                barMaxWidth: 4,
                barMinWidth: 2,
                barGap: '150%',
                itemStyle: {
                    color: '#679932',
                    borderRadius: [3, 3, 0, 0]
                }
            },
            {
                name: 'Холодна вода',
                type: 'bar',
                data: [13, 16, 19, 31, 29, 33, 26, 29, 24, 25, 18, 33, 36, 31],
                yAxisIndex: 2,
                barWidth: 6,
                barMaxWidth: 4,
                barMinWidth: 2,
                barGap: '150%',
                itemStyle: {
                    color: '#4694ff',
                    borderRadius: [3, 3, 0, 0]
                }
            },
            {
                name: 'ГВП',
                type: 'bar',
                yAxisIndex: 2,
                data: [6, 8, 9, 15, 14, 16, 13, 9, 4, 5, 8, 13, 6, 10],
                barWidth: 6,
                barMaxWidth: 4,
                barMinWidth: 2,
                barGap: '150%',
                itemStyle: {
                    color: '#ff4a7a',
                    borderRadius: [3, 3, 0, 0]
                }
            },
            {
                name: 'T1',
                type: 'line',
                data: [189, 154, 170, 186, 190, 178, 165, 158, 152, 157, 171, 175, 162, 140],
                yAxisIndex: 4,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#679932',
                        width: 3,
                    }
                },
                itemStyle: {
                    color: '#FFFFFF',
                    borderWidth: 3,
                    borderColor: '#679932',
                },
                symbol: 'circle',
                symbolSize: 10,
                emphasis: {
                    itemStyle: {
                        color: '#679932',
                        borderWidth: 4,
                        borderColor: '#FFFFFF',
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowBlur: 10,
                        shadowOffsetY: 4,
                    },
                },
            },
            {
                name: 'T2',
                type: 'line',
                data: [53, 46, 49, 59, 78, 52, 49, 52, 48, 53, 52, 46, 47, 49],
                yAxisIndex: 4,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#8cd31a',
                        width: 3,
                    }
                },
                itemStyle: {
                    color: '#FFFFFF',
                    borderWidth: 3,
                    borderColor: '#8cd31a',
                },
                symbol: 'circle',
                symbolSize: 10,
                emphasis: {
                    itemStyle: {
                        color: '#8cd31a',
                        borderWidth: 4,
                        borderColor: '#FFFFFF',
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowBlur: 10,
                        shadowOffsetY: 4,
                    },
                },
            },
        ]
    };

    option && myChart.setOption(option);

};

export default BlockAnalysis;
