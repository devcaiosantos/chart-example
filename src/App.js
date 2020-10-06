import React, { Component } from 'react';
import Contacts from './components/contacts';
import axios from "axios"
import Chart from "./components/Chart"

class App extends Component {
  state = {
    contacts: []
  }
  constructor(){
    
    super();
    this.state = {
      chartData:{}
    };
  }
 

  componentWillMount(){

    this.getChartData();
  }

  getChartData(){

    

    this.setState({
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

    });
  }

  
  async componentDidMount() {

    var config = {
      method: 'get',
      url: 'http://192.168.1.4:8080/api/balcaoeletronico/tipopedidocertidao',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWN0dXMiLCJyb2xlIjoiUk9MRV9VU1VBUklPIiwiY3JlYXRlZCI6eyJ5ZWFyIjoyMDIwLCJtb250aFZhbHVlIjo5LCJtb250aCI6IlNFUFRFTUJFUiIsImRheU9mTW9udGgiOjI5LCJkYXlPZlllYXIiOjI3MywiZGF5T2ZXZWVrIjoiVFVFU0RBWSIsImhvdXIiOjE1LCJtaW51dGUiOjIzLCJzZWNvbmQiOjE3LCJuYW5vIjo4NDY2MTEwMDAsImNocm9ub2xvZ3kiOnsiaWQiOiJJU08iLCJjYWxlbmRhclR5cGUiOiJpc284NjAxIn19LCJleHAiOjE2MDIwMDg1OTd9.B2rHpbGuZhBTZRF1bsGeQVcQf7ZSHgx6d6ibM_1-aJXiUb5OHqfj2aKmKXAflUN9OhaXoqBh2KErX4ke7C_e4w'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({ contacts: JSON.stringify(response.data)})
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  render() {
    return (
      <>
     {/* <Contacts contacts={this.state.contacts} />  */}
      <Chart chartData={this.state.chartData} location="Param1" legendPosition="bottom"/>
      </>
    )
  }
}

export default App;