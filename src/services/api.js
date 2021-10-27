import axios  from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3003',
    //baseURL: "https://tcc-backend-ufersa.herokuapp.com",
    
    //baseURL: 'https://tcc-backend-ufersa.herokuapp.com',
  
    crossDomain: true,
    
})

export default api;