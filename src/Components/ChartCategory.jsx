
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { SiOrigin } from "react-icons/si";
import { TbCategory } from "react-icons/tb";
const ChartCategory = () => {
    const [categorySum, setCategorySums] = useState([]);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let url = `https://codinftitans-backend-vmod4mzmzq-uc.a.run.app/stat/category`;

            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setCategorySums(data);
                } else {
                    throw new Error('Failed to fetch origin sums');
                }
            } catch (error) {
                console.error('Error fetching origin sums: ', error);
            }
        };

        fetchData();
    }, []);



    useEffect(() => {
        if (categorySum.length > 0) {
            const labels = categorySum.map((sum) => sum.categorie);
            const amounts = categorySum.map((sum) => sum.sum);

            const ctx = document.getElementById('categoryChart');
            if (ctx) {
                if (chartInstance) {
                    chartInstance.destroy();
                }

                const newChartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels,
                        datasets: [{
                            data: amounts,
                            hoverBackgroundColor: [
                                'grey',
                                'blue',
                                'green',
                                'pink',
                                'yellow',
                                'khaki',
                                'olive',
                                'red',
                                'brown',
                                'turquoise',
                                'lavender',
                                'peach',
                                'mint',
                                'coral'
                            ],
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right'
                            }
                        }
                    }
                });
                setChartInstance(newChartInstance);
            }
        }
    }, [categorySum]);

    return (
        <div className="doughnutContainer items-center p-4 border rounded-2xl bg-white shadow-lg">
            <div className="text-md flex justify-end font-bold items-center"><TbCategory className="text-xl"/>par categorie</div>
            <div className="">
                <canvas id="categoryChart"></canvas>
            </div>
        </div>
    );
}

export default ChartCategory;
