import axios  from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3003',
    //baseURL: "https://integracao-banco-de-dados-ibm.herokuapp.com",
    crossDomain: true,
    
})

export default api;