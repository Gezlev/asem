const OrgMain = () => {

    console.log(new Date("2021-06-01"));

    const dataset = {
        dates: ["2021-06-01","2021-07-01","2021-08-01","2021-09-01","2021-10-01","2021-11-01"],
        values: [120,140,160,150,180,160,200],
    }


    let chartDom = document.querySelector('.org--currents__temp_chart');

    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    let option = {
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
            data: dataset.dates
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                name: 'Сер. темп.',
                type: 'line',
                data: dataset.values,
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

    option && myChart.setOption(option);
    return false;
};

export default OrgMain;
