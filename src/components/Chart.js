import React, { Component } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2"

class Chart extends Component {
    constructor(props){

        super(props);
        this.state = {
            chartData:{
                labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets:[
                    {
                    label: '# of Values',
                    data: [3500, 4000, 5000, 5000, 4000, 4000],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]

            }
        }
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={{ maintainAspectRatio: false,
                        title:{
                               display: this.props.displayTitle,
                               text: "Grafic XX",
                               fontSize: 16
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position: this.props.legendPosition,
                            
                        }
                    }
                            
                }
                />
            </div>

        )
    }
}

export default Chart;