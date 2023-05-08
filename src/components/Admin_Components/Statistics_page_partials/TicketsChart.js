import React from 'react';
import { Bar } from 'react-chartjs-2';





const TicketsChart = ({ ticketsData }) => {
    if (!ticketsData) {
        return null;
    }
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += ticketsData[context.label][0];
                        return label;
                    }
                }
            },
            // add this block to show the first number of the array value under the label
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const dataArr = Object.values(ticketsData);
                    return dataArr[context.dataIndex][0];
                }
            }

        },
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    callback: function (value, index, values) {
                        return '';
                    },
                },
                suggestedMin: 0,
                suggestedMax: 1,
            },
        },
    };
    const labels = Object.keys(ticketsData);
    const data = {
        labels,
        datasets: [
            {
                label: 'Number of Attendees',
                data: Object.values(ticketsData).map(item => item[0] / item[1]),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],

    };
    return (
        <div className="bg-white p-4 m-2 md:m-4 rounded-lg shadow-md md:min-h-[92%] ">
            <div>
                <h2 className="text-2xl font-bold mb-4">Number of Attendees</h2>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default TicketsChart;