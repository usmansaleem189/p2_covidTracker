import React from 'react';
import styles from './Graph.module.css';
import {Line, Bar} from 'react-chartjs-2';

//import {Chart} from 'chart.js/auto';
  
  
//import {Chart, CategoryScale, LinearScale} from 'chart.js'; 
//Chart.register(CategoryScale,LinearScale)

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
//import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Graph({dailyStats, continentData}) {
  if (!dailyStats.reportDate || !continentData.length)
    return null;

  //console.log(dailyStats);

    const lineData = {
      labels: dailyStats.reportDate,
      datasets: [
        {
        label: "Confirmed",
        data: dailyStats.confirmed,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
        },
        {
        label: "Deaths",
        data: dailyStats.deaths,
        fill: false,
        borderColor: "#742774"
        },
      ]
    };

    const barData = {
      labels: continentData.map((data) => data.name),

      datasets: [
          {
              label: 'Cases',
              backgroundColor: 'lightblue',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: continentData.map((data) => data.cases),
          },
          {
              label: 'Recovered',
              backgroundColor: 'lightgreen',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: continentData.map((data) => data.recovered)
          },
          {
              label: 'Deaths',
              backgroundColor: 'lightred',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: continentData.map((data) => data.deaths)
          }
      ]
  }




  return (
    <div className={styles.graphContainer}>
      <div className={styles.chartContainer}>
      <div className={styles.lineChart}>
      <Line 
        data = {lineData}
        options={{
          plugins: {
            title: {
              display: true,
              text:  `${dailyStats.name}: Daily Data `,
               font: {
                 size: 12
               }
            },
            legend: {
              display: true,
              position: 'top',
              labels: {
                 font: {
                   size: 10
                 },
                 usePointStyle:true
              }
            },

            responsive: true,
            //maintainAspectRatio: true,
            aspectRatio: 1
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 10
              }
            }
          },
          y: {
            ticks: {
              font: {
                size: 10,
                lineHeight: 1
              }
            },
          
          },
        }
    
    }}
    className={styles.lineTest} />
       </div>


       <div className={styles.barChart}>
      <Bar data={barData}
          options={{
            plugins: {
              title: {
                display: true,
                text: `Covid-19 Statistics for ${continentData[0].title}`,
                font: {
                  size: 12
                }
              },
              legend: {
                display: true,
                position: 'top',
                labels: {
                  font: {
                    size: 10
                  },
                  usePointStyle:true
                }
              },
              responsive: true,
              //maintainAspectRatio: true,
              aspectRatio: 1
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 10
                  }
                }
              },
              y: {
                ticks: {
                  font: {
                    size: 10
                  }
                }
              },
            }
          }}
          className={styles.barTest}/>
            </div>
            </div>


    </div>
  )
}
