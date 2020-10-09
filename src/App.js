import React, { Component } from 'react';
import axios from "axios"
import Chart from "./components/Chart"

import NewChart from "./components/NewChart"

class App extends Component {
  constructor() {

    super();
    this.state = {
      chartData: {}
    };
  }


  // componentWillMount() {

  //   this.getChartData();
  // }

  // getChartData() {



  //   this.setState({
  //     chartData: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [
  //         {
  //           label: '# of Values',
  //           data: [3500, 4000, 5000, 5000, 4000, 4000],
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)'
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //         }]

  //     }

  //   });
  // }


  async componentDidMount() {

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
          return JSON.stringify(response.data.data.token)
        })
        .catch(function (error) {
          console.log("Erro ao autenticar: " + error);

        });
      
      return response

    }
   

    //////////////////////////////////

    async function getDtCad(){
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
        console.log("<Pegou dados cadastro>")
        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(config)
        console.log(error.message);
      });


    }

     getDtCad()



  }


  render() {
//    <Chart chartData={this.state.chartData} location="Param1" legendPosition="bottom" />

    //chartData={this.state.chartData}
    return (
      <>

        <NewChart/>
      
      </>
    )
  }
}

export default App;