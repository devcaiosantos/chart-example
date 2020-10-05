import axios from "axios"

const config= {
        method: 'post',
        url: 'http://192.168.1.4:8080/auth',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ "usuario": "mactus", "senha": `codes207017` })
}




 const api =  axios.create({
    baseURL:"http://192.168.1.4:8080/api/balcaoeletronico/tipopedidocertidao",
    headers: {'Authorization': 'eyJzdWIiOiJtYWN0dXMiLCJyb2xlIjoiUk9MRV9VU1VBUklPIiwiY3JlYXRlZCI6eyJ5ZWFyIjoyMDIwLCJtb250aFZhbHVlIjo5LCJtb250aCI6IlNFUFRFTUJFUiIsImRheU9mTW9udGgiOjI5LCJkYXlPZlllYXIiOjI3MywiZGF5T2ZXZWVrIjoiVFVFU0RBWSIsImhvdXIiOjE1LCJtaW51dGUiOjIzLCJzZWNvbmQiOjE3LCJuYW5vIjo4NDY2MTEwMDAsImNocm9ub2xvZ3kiOnsiaWQiOiJJU08iLCJjYWxlbmRhclR5cGUiOiJpc284NjAxIn19LCJleHAiOjE2MDIwMDg1OTd9.B2rHpbGuZhBTZRF1bsGeQVcQf7ZSHgx6d6ibM_1-aJXiUb5OHqfj2aKmKXAflUN9OhaXoqBh2KErX4ke7C_e4w'}

 })

 export default api
 
   