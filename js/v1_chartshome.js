/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#33b35a';
    var gray = '#EBEDEF';
    var red = '#EC7063';
    var amber = '#F5B041';
    var green = '#52BE80';


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var LINECHART = $('#lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(77, 193, 75, 0.4)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [50, 20, 60, 31, 52, 22, 40],
                    spanGaps: false
                },
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 30, 81, 46, 55, 30],
                    spanGaps: false
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = $('#pieChart');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        data: {
            labels: [
                "FirstY",
                "Second",
                "Third"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ]
                }],
			options: {
         		legend: {
            		display: false
         		},
         		tooltips: {
            		enabled: true
         		}
    		}
        }
    });
    
    var PIECHART1 = $('#pieChart1');
    var myPieChart1 = new Chart(PIECHART1, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [30, 50, 10, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART2 = $('#pieChart2');
    var myPieChart2 = new Chart(PIECHART2, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [20, 5, 100, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART3 = $('#pieChart3');
    var myPieChart3 = new Chart(PIECHART3, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [4, 50, 60, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART4 = $('#pieChart4');
    var myPieChart4 = new Chart(PIECHART4, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [100, 50, 3, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });   

    var PIECHART5 = $('#pieChart5');
    var myPieChart5 = new Chart(PIECHART5, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [300, 10, 200],
                    borderWidth: [1, 1, 1, 10],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART6 = $('#pieChart6');
    var myPieChart6 = new Chart(PIECHART6, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [30, 30, 30],
                    borderWidth: [1, 1, 1, 10],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    
        var PIECHARTB = $('#pieChartB');
    var myPieChart1 = new Chart(PIECHARTB, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [30, 50, 10, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHARTA = $('#pieChartA');
    var myPieChartA = new Chart(PIECHARTA, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [20, 5, 100, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART9 = $('#pieChart9');
    var myPieChart9 = new Chart(PIECHART9, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [4, 50, 60, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    var PIECHART8 = $('#pieChart8');
    var myPieChart8 = new Chart(PIECHART8, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [100, 50, 3, 10],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });   

    var PIECHART7 = $('#pieChart7');
    var myPieChart7 = new Chart(PIECHART7, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [300, 10, 200],
                    borderWidth: [1, 1, 1, 10],
                    backgroundColor: [
                        gray,red,amber,green
                    ],
                    hoverBackgroundColor: [
                        gray,red,amber,green
                    ]
                }]
        }
    });  
    
    

});
