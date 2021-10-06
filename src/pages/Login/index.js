import React  from 'react'
import ReactDOM from  'react-dom'
import  {Link ,useHistory} from 'react-router-dom'
import './style.css'



export default function Login(){
    const history = useHistory();
    async function ValidaSenha(){
        
        var login = document.getElementById('login').value
        var senha = document.getElementById('senha').value
        if (login == 'admin' & senha == '1234'){
            
            history.push('/escritoriofortesol')
            
            console.log('entrou')
        }   
    }
    return(
        <div class = 'pai'>

            <div class='inputs'>
                <a>Login</a> <input type = "text" id='login'></input>
                <a>Senha</a> <input id= 'senha'></input>
                <button class='bt_login' onClick={(e)=>ValidaSenha()}>Entrar</button>
            </div>

        </div>
    )
} 