import React, { Component } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import moment from "moment"
import DaysLastMonth from "../data"
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

}));

moment.locale('pt-BR');
var b = new Date();
var mes = b.getMonth() - 1
var ano = b.getFullYear()
var a = moment().subtract(1, 'months').format('YYYY-MM-DD')
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


var diasMes = function getDiasMes(month, year) {
    month--;

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(`${date.getDate()}`);
        date.setDate(date.getDate() + 1);
    }
    return days;
}





class Chart extends Component {
    constructor(props) {

        super(props);
        this.state = {
            chartData: {

                labels: DaysLastMonth,
                datasets: [
                    {
                        label: 'Demanda de processos',
                        data: [186, 179, 187, 178, 333, 123, 345, 123, 666, 234, 754, 435, 123, 321, 345,
                            108, 234, 321, 222, 324, 123, 321, 111, 222, 323, 324, 444, 232, 111, 312],
                        backgroundColor: '#36A2EB',


                        borderColor: '#36A2EB',


                        borderWidth: 1
                    },
                    {
                        label: 'Processos concluidos',
                        data: [176, 186, 179, 187, 178, 108, 176, 186, 179, 187, 178, 108, 176,
                            186, 179, 187, 178, 108, 179, 187, 178, 108, 176, 186, 179, 123, 345, 123, 666, 754],
                        backgroundColor: '#FF6384',


                        borderColor: '#FF6384',


                        borderWidth: 1
                    }
                ]

            },
            chartData2:
            {

                labels: DaysLastMonth,

                datasets: [
                    {
                        label: 'Demanda de Processos',
                        data: [186, 179, 187, 178, 333, 123, 345, 123, 666, 234, 754, 435, 123, 321, 345,
                            108, 234, 321, 222, 324, 123, 321, 111, 222, 323, 324, 444, 232, 111, 312],
                        backgroundColor: "transparent",
                        borderColor: "#36A2EB"
                    },
                    {
                        label: 'Processos concluidos',
                        data: [176, 186, 179, 187, 178, 108, 176, 186, 179, 187, 178, 108, 176,
                            186, 179, 187, 178, 108, 179, 187, 178, 108, 176, 186, 179, 123, 345, 123, 666, 754],
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
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid container item xs={12} md={6}>
                    <Line
                        data={this.state.chartData2}

                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            keepAspectRatio: false,
                            title: {
                                display: this.props.displayTitle,
                                text: `Gráfico ${mes} ${ano} (Último mês) `,
                                fontSize: 16
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

                <Grid container item xs={12} md={6}>
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: this.props.displayTitle,
                                text: `Gráfico ${mes} ${ano} (Último mês) `,
                                fontSize: 16
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

                {/* <Grid container item xs={12} md={6}>
                    <Pie
                        data={this.state.chartData}
                        width={100}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: this.props.displayTitle,
                                text: "Grafic II",
                                fontSize: 16
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition,

                            }
                        }

                        }
                    />
                </Grid> */}

            </Grid>


        )
    }
}

export default Chart;