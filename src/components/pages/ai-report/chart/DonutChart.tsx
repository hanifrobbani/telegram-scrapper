"use client"
import ReactECharts from 'echarts-for-react';

export default function DonutChart() {
    const data = [
        { value: 35, name: 'Testnet'},
        { value: 25, name: 'Galxe', },
        { value: 15, name: 'Discord'},
        { value: 10, name: 'NFT',   },
        { value: 15,  name: 'Others',},
    ];

    const options = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            right: '15%',
            top: 'center',
            itemWidth: 12,
            itemHeight: 12,
            borderRadius: 50,
            icon: 'circle',
            textStyle: {
                fontSize: 14,
                color: '#555',
                rich: {
                    name: {
                        width: 70,
                        fontSize: 14,
                        color: '#555',
                    },
                    value: {
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#333',
                        align: 'right',
                    }
                }
            },
            formatter: (name: string) => {
                const item = data.find(d => d.name === name);
                return `{name|${name}}{value|  ${item?.value}%}`;
            },
        },
        series: [
            {
                name: 'Airdrop Types',
                type: 'pie',
                radius: ['45%', '72%'],
                center: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: { show: false },
                emphasis: {
                    scale: true,
                    scaleSize: 5,
                    label: { show: false },
                },
                labelLine: { show: false },
                data,
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