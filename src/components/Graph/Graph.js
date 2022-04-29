import React from 'react';
import styles from './Graph.module.css';
import {Line, Bar} from 'react-chartjs-2';

import {Chart} from 'chart.js/auto';
  
  


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
      <Line 
        data = {lineData}
        options={{
          plugins: {
            title: {
              display: true,
              text:  `${dailyStats.name}: Daily Data `,
              font: {
                size: 20
              }
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                font: {
                  size: 18
                }
              }
            },

            responsive: true,
            maintainAspectRatio: true,
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 18
              }
            }
          },
          y: {
            ticks: {
              font: {
                size: 18
              }
            }
          },
        }
    
    }}
       className={styles.lineChart}/>
      <Bar data={barData}
          options={{
            plugins: {
              title: {
                display: true,
                text: `Covid-19 Statistics for ${continentData[0].title}`,
                font: {
                  size: 20
                }
              },
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  font: {
                    size: 18
                  }
                }
              },
              responsive: true,
              maintainAspectRatio: true,
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 18
                  }
                }
              },
              y: {
                ticks: {
                  font: {
                    size: 18
                  }
                }
              },
            }
          }}
            className={styles.barChart}/>


    </div>
  )
}
