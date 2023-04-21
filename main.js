console.log('script is working')

const ctx = document.getElementById('myChart').getContext('2d')

let delayed

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, 'rgba(58,123,213,1')
gradient.addColorStop(1, 'rgba(0,210,225,0.3)')

const labelA = ['2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
const labelB = ['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010']
const labelC = ['1991','1992','1993','1994','1995','1996','1997','1998','1999','2000']

let labelContainer = [labelA, labelB, labelC]
let labels = [
    'XXX1',
    'XXX2',
    'XXX3',
    'XXX4',
    'XXX5',
    'XXX6',
    'XXX7',
    'XXX8',
    'XXX9',
    'XXX0',
]
let hiddenStatus = [false, true, true]


const data = {
    labels,
    datasets: [
        {
            data: [3.81,3.75,3.58,3.66,3.39,3.2,3.06,3.03,2.96,2.95],
                label: '2011-2020',
                fill: true,
                backgroundColor: gradient,
                borderColor: '#666',
                tension: 0.3,
        },
        {
            data: [4.32,4.18,3.99,4.12,3.93,3.86,3.83,3.83,3.76,3.76],
            label: '2001-2010',
            fill: true,
            backgroundColor: gradient,
            borderColor: '#f77',
            tension: 0.3,
        },
        {
            data: [5.45,5.46,5.17,5.02,4.81,4.78,4.74,4.84,4.6,4.56],
            label: '1991-2000',
            fill: true,
            backgroundColor: gradient,
            borderColor: '#FFFF00',
            tension: 0.3,
        },
    ],
}

const datasetValues = [
    {
        data: [3.81,3.75,3.58,3.66,3.39,3.2,3.06,3.03,2.96,2.95],
            label: '2011-2020',
            fill: true,
            backgroundColor: gradient,
            borderColor: '#666',
            tension: 0.3,
    },
    {
        data: [4.32,4.18,3.99,4.12,3.93,3.86,3.83,3.83,3.76,3.76],
        label: '2001-2010',
        fill: true,
        backgroundColor: gradient,
        borderColor: '#f77',
        tension: 0.3,
        // hidden: hiddenStatus[1]
    },
    {
        data: [5.45,5.46,5.17,5.02,4.81,4.78,4.74,4.84,4.6,4.56],
        label: '1991-2000',
        fill: true,
        backgroundColor: gradient,
        borderColor: '#FFFF00',
        tension: 0.3,
        // hidden: hiddenStatus[2]
    },
]

const config = {
    type: 'line',
    data: data,
    options: {
    //     plugins: {
    //         legend: {
    //             onClick(e, legendItem, legend){
    //                 console.log('clicked dataset')
    //                 let datasetIndex = legendItem.datasetIndex
    //                 let datasetLabel = data.datasets[datasetIndex]

    //                 let clickedLabel = datasetLabel.label

    //                 // updateX(clickedLabel, datasetIndex)
    //             }
    //         },
    //     },

        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0
                if (context.type === 'data' && context.mode === 'default' && !delayed){
                    delay = context.dataIndex * 300 + context.datasetIndex * 100
                }
                return delay;
            },
        },

        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Crime Per 100K Population'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        },
    }
}
const myChart = new Chart(ctx, config)

// function updateX (clickedLabel,datasetIndex) {
//     console.log(labelContainer[datasetIndex])

//     if (hiddenStatus[datasetIndex] == true){

//     hiddenStatus[datasetIndex] = !hiddenStatus[datasetIndex]
//     myChart.data.labels = labelContainer[datasetIndex]
//     myChart.data.datasets[0] = datasetValues[datasetIndex]
//     }
//     else {
//         hiddenStatus[datasetIndex] = !hiddenStatus[datasetIndex]
//     }
//     myChart.update()
// }