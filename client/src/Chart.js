/*
Chart.js
This module is used to render Line Chart.
*/

import moment from 'moment';
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    let countApr = 0, countAug = 0, countDec=0, countFeb=0, countJan=0, countJul=0, countJun=0, countMar=0, countMay=0, countNov=0, countOct=0, countSep=0, chartData=[];
    const [region, setRegion] = React.useState('East');
    data.filter(record => record.region === region).forEach(record => {
        chartData = [
        moment(record.dop).format('MMM').toLowerCase() === 'jan' ? countJan++ : countJan,
        moment(record.dop).format('MMM').toLowerCase() === 'feb' ? countFeb++ : countFeb,
        moment(record.dop).format('MMM').toLowerCase() === 'mar' ? countMar++ : countMar,
        moment(record.dop).format('MMM').toLowerCase() === 'apr' ? countApr++ : countApr,
        moment(record.dop).format('MMM').toLowerCase() === 'may' ? countMay++ : countMay,
        moment(record.dop).format('MMM').toLowerCase() === 'jun' ? countJun++ : countJun,
        moment(record.dop).format('MMM').toLowerCase() === 'jul' ? countJul++ : countJul,
        moment(record.dop).format('MMM').toLowerCase() === 'aug' ? countAug++ : countAug,
        moment(record.dop).format('MMM').toLowerCase() === 'sep' ? countSep++ : countSep,
        moment(record.dop).format('MMM').toLowerCase() === 'oct' ? countOct++ : countOct,
        moment(record.dop).format('MMM').toLowerCase() === 'nov' ? countNov++ : countNov,
        moment(record.dop).format('MMM').toLowerCase() === 'dec' ? countDec++ : countDec,
        ]
    })
    const dataForChart = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          { 
            label: `Number of Policies Purchased in ${region} Region`,
            data: chartData,
            fill: false,
            backgroundColor: 'white',
            borderColor: '#EF3F09',
          },
        ],
      };
      
      const options = {
        scaleShowVerticalLines: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            },
          ],
        },
      };

  return (
    <>
    <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={region} onChange={(e) => setRegion(e.target.value)}>
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="North">North</option>
    <option value="South">South</option>
    </select>
      <Line data={dataForChart} options={options} />
    </>
  )
}

export default LineChart;