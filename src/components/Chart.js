import React, { Component } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import moment from "moment"
moment.locale('pt-BR');
var b = new Date();
var mes =b.getMonth()
var ano = b.getFullYear()

if (mes == 0) {
    mes = 12
} 

switch (mes) {
    case 1:
        mes = "Janeiro"
        break;
    case 2:
        mes = "Fevereiro"
        break;
    case 3:
        mes = "Março"
        break;
    case 4:
        mes = "Abril"
        break;
    case 5:
        mes = "Maio"
        break;
    case 6:
        mes = "Junho"
            break;    
    case 7:
        mes = "Julho"
        break;
    case 8:
        mes = "Agosto"
        break;
    case 9:
        mes = "Setembro"
        break;
    case 10:
        mes = "Outubro"
        break;
    case 11:
        mes = "Novembro"
        break;
    case 12:
        mes = "Dezembro"
            break;    

    default:
        break;
}


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

            },
            chartData2:
                {
                    labels: ['2000', '2001', '2002', '2003', '2004', '2005'],
                                
                    datasets: [
                        {
                            label: 'Crecimento Populacional',
                            data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806],
                           backgroundColor: "transparent",
                            borderColor: "#36A2EB"
                        },
                        {
                            label: 'Exemplo de Gráfico Comparativo',
                            data: [173448346, 185150806, 175885229, 182911487, 178276128, 180619108],
                            backgroundColor: "transparent",
                            borderColor: "#FF6384"
                        }
            
                    ]
                }
            
        }
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right",
        location: "Params",
    }
    render() {
        return (
            <>
            <div>
                <Bar
                    data={this.state.chartData}
                width={100}
                 height={400}
                    options={{ maintainAspectRatio: false,
                        title:{
                               display: this.props.displayTitle,
                               text: "Grafic I",
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
            <hr></hr>
            <div >
                <Pie
                    data={this.state.chartData}
                    width={100}
                     height={400}
                    options={{ maintainAspectRatio: false,
                        title:{
                               display: this.props.displayTitle,
                               text: "Grafic II",
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
            <hr></hr>
            <div>
                <Line
                    data={this.state.chartData2}
                width={100}
                 height={400}
                    options={{ maintainAspectRatio: false,
                        title:{
                               display: this.props.displayTitle,
                               text: `Gráfico ${mes} de ${ano} (Último mês)`,
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
            </>

        )
    }
}

export default Chart;