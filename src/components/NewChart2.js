import React, { Component, useState } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWN0dXMiLCJyb2xlIjoiUk9MRV9VU1VBUklPIiwiY3JlYXRlZCI6eyJ5ZWFyIjoyMDIwLCJtb250aFZhbHVlIjoxMCwibW9udGgiOiJPQ1RPQkVSIiwiZGF5T2ZNb250aCI6OCwiZGF5T2ZZZWFyIjoyODIsImRheU9mV2VlayI6IlRIVVJTREFZIiwiaG91ciI6MTUsIm1pbnV0ZSI6MzAsInNlY29uZCI6NywibmFubyI6MzE5MTA2NDAwLCJjaHJvbm9sb2d5Ijp7ImlkIjoiSVNPIiwiY2FsZW5kYXJUeXBlIjoiaXNvODYwMSJ9fSwiZXhwIjoxNjAyNzg2NjA3fQ.7GsTpeazSuvOHMdm35Ud_igFhBE_ztDL2WKQLHerh8IsFkf6accCigZ4QoSIxdVX1RCaqKtMGvMpw8CYEuDVNw'

class PostFom extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataInicial: "",
            dataFinal: ""
        }

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        let empSal = [];
        let empAge = [];
        e.preventDefault()
        console.log(this.state)
        var config = {
            method: 'post',
            url: 'http://192.168.1.4:8080/api/sri/relatorio/protocolo/naturezaformal/dataCadastro',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ "inicio": `${this.state.dataInicial}T00:00:00.522Z`, "fim": `${this.state.dataFinal}T23:59:59.522Z` })
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(config)
                console.log(error.message);
            });
    }
    render() {

        const { dataInicial, dataFinal } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input id="dataInicial" name="dataInicial" placeholder="Data inicial" type="date" onChange={this.changeHandler}></input>
                    <input id="dataFinal" name="dataFinal" placeholder="Data final" type="date" onChange={this.changeHandler}></input>
                    <button type="submit">Gerar Gráfico</button>
                </form>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} >

                        <HorizontalBar
                            // data={chartData}
                            width={100}
                            //height={1300}
                            options={{
                                maintainAspectRatio: true,

                                title: {
                                    display: true,
                                    text: `Gráfico Protocolos `,
                                    fontSize: 22,
                                    fontColor: "#0069af"
                                },
                                legend: {
                                    display: true,
                                    position: "top",

                                },
                                animation: {
                                    duration: 3000,
                                },
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                //autoSkip: true,
                                                //maxTicksLimit: 200,
                                                beginAtZero: true,
                                            },
                                            gridLines: {
                                                display: true,
                                                //lineWidth:5
                                            },

                                        },
                                    ],
                                }
                            }}
                        />
                    </Grid>
                </Grid>
            </div>

        )


    }

}

export default PostFom