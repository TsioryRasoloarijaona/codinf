
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { SiOrigin } from "react-icons/si";

const ProductSum = () => {
    const [productSum, setProductSum] = useState([]);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let url = `https://codinftitans-backend-vmod4mzmzq-uc.a.run.app/sum/chocolate`;

            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setProductSum(data);
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
        if (productSum.length > 0) {
            const labels = productSum.map((sum) => sum.nom);
            const amounts = productSum.map((sum) => sum.sum);

            const ctx = document.getElementById('product');
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
    }, [productSum]);

    return (
        <div className="doughnutContainer items-center p-4 border rounded-2xl bg-white shadow-lg">
            <div className="text-md flex justify-end font-bold items-center"><SiOrigin className="text-xl"/>produit</div>
            <div className="">
                <canvas id="product"></canvas>
            </div>
        </div>
    );
}

export default ProductSum;
