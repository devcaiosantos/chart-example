import React, { Component } from 'react';
import axios from "axios"
import Chart from "./components/Chart"

import NewChart from "./components/NewChart"
import NewChart2 from "./components/NewChart2"
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataInicioFormatada: '',
      dataFimFormatada: '',
      cadProtocolo:{
        chartdata:{

        }

      }
  }
  }
  render() {
//    <Chart chartData={this.state.chartData} location="Param1" legendPosition="bottom" />

    //chartData={this.state.chartData}
    return (
      <>

        <NewChart2/>
      
      </>
    )
  }
}

export default App;