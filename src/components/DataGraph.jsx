import styles from './dataGraph.module.css'
import JSONData from '../data/stackline_frontend_assessment_data_2021.json'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
} from 'chart.js/auto'


export default function DataGraph() {
    const salesData = JSONData[0].sales;
    console.log(salesData)

    const convertToMonth = (dateStr) => {
        const date = new Date(dateStr);
        const monthIdx = date.getMonth();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return months[monthIdx];
    }

    const getAverageRetailSales = (salesData) => {
        const averageData = {}
        salesData.forEach(item => {
            const month = convertToMonth(item.weekEnding);
            if(!averageData[month]) {
                averageData[month] = {totalSales: 0, count: 0};
            }
            averageData[month].totalSales += item.retailSales;
            averageData[month].count += 1;
        })

        for (const month in averageData) {
            averageData[month].averageSales = averageData[month].totalSales / averageData[month].count;
        }

        return averageData;
    }

    const getAverageWholesaleData = (salesData) => {
        const averageData = {}
        salesData.forEach(item => {
            const month = convertToMonth(item.weekEnding);
            if(!averageData[month]) {
                averageData[month] = {totalSales: 0, count: 0};
            }
            averageData[month].totalSales += item.wholesaleSales;
            averageData[month].count += 1;
        })

        for (const month in averageData) {
            averageData[month].averageSales = averageData[month].totalSales / averageData[month].count;
        }

        return averageData;
    }

    const averageRetailData = getAverageRetailSales(salesData)
    const averageWholesaleData = getAverageWholesaleData(salesData)

    const convertToChart = (averageRetailData, averageWholesaleData) => {
        const labels = Object.keys(averageRetailData)
        const retailData = labels.map(month => averageRetailData[month].averageSales)
        const wholesaleData = labels.map(month => averageWholesaleData[month].averageSales)
        return {
            labels,
            datasets: [
                {
                    label: 'Retail Sales',
                    data: retailData,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.1
            },
            {
                label: 'Wholesale Sales',
                data: wholesaleData,
                fill: false,
                borderColor: 'green',
                tension: 0.1
        }
        
        ]
        }
    }
    const retailData = convertToChart(averageRetailData, averageWholesaleData);


    return(
        <div className={styles.graph}>
            <Line data={retailData}/>
        </div>
    )
}