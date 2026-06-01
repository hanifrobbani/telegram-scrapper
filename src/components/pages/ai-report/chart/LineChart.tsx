"use client"
import ReactECharts from 'echarts-for-react';

export default function LineChart() {
    const options = {
        grid: {
            top: 10,
            right: 10,
            bottom: 30,
            left: 40,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#4A9EE8',
                    width: 1.5,
                    type: 'dashed',
                },
            },
            backgroundColor: '#1a1a2e',
            borderWidth: 0,
            borderRadius: 8,
            padding: [8, 14],
            textStyle: {
                color: '#fff',
                fontSize: 13,
            },
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: '#999',
                fontSize: 12,
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#e8eaf0',
                    type: 'solid',
                },
            },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: '#999',
                fontSize: 12,
            },
        },
        series: [
            {
                data: [12, 35, 52, 75, 68, 40, 28],
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 12,
                lineStyle: {
                    color: '#4A9EE8',
                    width: 2.5,
                },
                itemStyle: {
                    color: '#4A9EE8',
                    borderColor: '#fff',
                    borderWidth: 3,
                },
                emphasis: {
                    scale: true,
                    itemStyle: {
                        symbolSize: 16,
                        borderWidth: 3,
                    },
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(74, 158, 232, 0.25)' },
                            { offset: 1, color: 'rgba(74, 158, 232, 0.02)' },
                        ],
                    },
                },
            }
        ]
    };

    return (
        <div style={{ width: '100%', height: '220px' }}>
            <ReactECharts
                option={options}
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    );
}