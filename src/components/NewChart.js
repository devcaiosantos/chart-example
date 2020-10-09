import React, { useState, useEffect } from "react";
import {HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
const NewChart = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    async function getToken() {
        var data = JSON.stringify({
            "usuario": "mactus",
            "senha": "codes207017"
        });

        var config = {
            method: 'post',
            url: 'http://192.168.1.4:8080/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        const response = await axios(config)
            .then(function (response) {
                console.log("Autenticado!")
                //console.log(response.data.data)
                return JSON.stringify(response.data.data.token)
            })
            .catch(function (error) {
                console.log("Erro ao autenticar: " + error);

            });

        return response

    }
    async function getDtCad() {
        const token = await getToken()
        const formatedToken = token.substr(1, token.length - 2)
        var data = JSON.stringify({ "inicio": "2020-07-07T17:34:59.522Z", "fim": "2020-10-07T17:34:59.522Z" });
        var config = {
            method: 'post',
            url: 'http://192.168.1.4:8080/api/sri/relatorio/protocolo/naturezaformal/dataCadastro',
            headers: {
                'Authorization': formatedToken,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                //console.log(response.data)
                console.log("<Pegou dados cadastro>")
                
                for (const dataObj of response.data) {
                   // console.log(dataObj)
                    empSal.push(parseInt(dataObj.quantidade));
                    empAge.push((dataObj.descricao));
                }
                setChartData({
                    labels: empAge,
                    datasets:[
                      {
                          label: 'Protocolos Cadastrados',
                          data: empSal,
                          backgroundColor: '#36A2EB',
  
  
                          borderColor: '#36A2EB',
  
  
                          borderWidth: 1
                      },
                  
                  ]
                });
                console.log("Length!!!: "+empSal.length, empAge.length);
            })
            .catch(function (error) {
                console.log(config)
                console.log(error.message);
            });
       

    };
    getDtCad()
  };
  

  useEffect(() => {
    chart();
  }, []);
  return (
    
      <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>


                 <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} >
     
        <HorizontalBar
          data={chartData}
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
                      maxTicksLimit: 200,
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
  );
};

export default NewChart;


