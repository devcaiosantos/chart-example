import React, { Component } from 'react';
import { Bar, Line, HorizontalBar } from "react-chartjs-2";
import moment from "moment"
import DaysLastMonth from "../dados/data"
import { QatdCad, DesCad} from "../dados/dataCadastro"
import {QatdCadPronto, DesCadPronto} from "../dados/dataPronto"

import Grid from '@material-ui/core/Grid';
import { TextField, Box } from '@material-ui/core';
moment.locale('pt-BR');
var b = new Date();
var mes = b.getMonth() - 1
var ano = b.getFullYear()

switch (mes) {
    case 0:
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Maio"
        break;
    case 5:
        mes = "Junho"
        break;
    case 6:
        mes = "Julho"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;

    default:
        mes = ""
        ano = "ano"
        break;
}

class Chart extends Component {

    constructor(props) {

        super(props);
        this.state = {

            chartData: {

                labels: DesCadPronto,
                datasets: [
                    {
                        label: 'Protocolos concluidos',
                        data: QatdCadPronto,
                        backgroundColor: '#FF6384',


                        borderColor: '#FF6384',


                        borderWidth: 1
                    },
                    
                ]

            },
            chartData2: {

                labels: DaysLastMonth,
                datasets: [
                    {
                        label: 'Demanda de processos',
                        data: [186, 179, 187, 178, 333, 123, 345, 123, 666, 234, 754, 435, 123, 321, 345,
                            108, 234, 321, 222, 324, 123, 321, 111, 222, 323, 324, 444, 232, 111, 312],
                        backgroundColor: 'transparent',


                        borderColor: '#36A2EB',

                        borderWidth: 4,
                        lineTension: 0.1

                    },
                    {
                        label: 'Processos concluidos',
                        data: [176, 186, 179, 187, 178, 108, 176, 186, 179, 187, 178, 108, 176,
                            186, 179, 187, 178, 108, 179, 187, 178, 108, 176, 186, 179, 123, 345, 123, 666, 754],
                        backgroundColor: 'transparent',


                        borderColor: '#FF6384',

                        borderWidth: 4,
                        lineTension: 0.1

                    }
                ]


            },
            chartDataBar: {

                labels: DesCad,
                datasets: [
                    {
                        label: 'Protocolos Cadastrados',
                        data: QatdCad,
                        backgroundColor: '#36A2EB',


                        borderColor: '#36A2EB',


                        borderWidth: 1
                    },
                
                ]

            },

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

            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>


                 <Grid container item xs={12} sm={12} md={12} lg={8} xl={8} >

                    <HorizontalBar
                        data={this.state.chartData}
                        width={100}
                        height={600}
                        options={{
                            maintainAspectRatio: false,

                            title: {
                                display: this.props.displayTitle,
                                text: `Gráfico Protocolos `,
                                fontSize: 22,
                                fontColor: "#0069af"
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition,

                            },
                            animation: {
                                duration: 3000,
                            },
                            scales: {
                                yAxes: [
                                  {
                                    ticks: {
                                      autoSkip: true,
                                      maxTicksLimit: 10,
                                      beginAtZero: true,
                                    },
                                    gridLines: {
                                      display: false,
                                    },
                                  },
                                ],
                            }
                        }

                        }
                    />

                </Grid>

                {/* <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} >
                    <Line
                        data={this.state.chartData2}
                        width={100}
                        height={400}
                        options={{
                            maintainAspectRatio: false,

                            title: {
                                display: this.props.displayTitle,
                                text: `Gráfico ${mes} ${ano} (Último mês) `,
                                fontSize: 22,
                                fontColor: "#0069af"
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition,

                            },
                            animation: {
                                duration: 3000,
                            }
                        }

                        }
                    />
                </Grid>  */}
                <Box display="flex">
                    <Box mr={"10%"}>
                        <form noValidate mr={6}>
                            <TextField
                                id="date"
                                label="initial date"
                                type="date"
                                defaultValue="2017-05-24"

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Box>
                    <Box >
                        <form noValidate>
                            <TextField

                                id="date"
                                label="final date"
                                type="date"
                                defaultValue="2017-05-24"

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Box >
                </Box>
                <Grid container item xs={12} sm={12} md={12} lg={8} xl={8} >
                    <HorizontalBar
                        data={this.state.chartDataBar}
                        width={100}
                        height={600}
                        options={{
                            maintainAspectRatio: false,

                            title: {
                                display: this.props.displayTitle,
                                text: `Gráfico Protocolos `,
                                fontSize: 22,
                                fontColor: "#0069af"
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition,

                            },
                            animation: {
                                duration: 3000,
                            }
                        }

                        }
                    />
                </Grid>


            </Grid>


        )
    }
}

export default Chart;