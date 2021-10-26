import React, { useEffect } from 'react'
import './style.css'
import ReactDOM from 'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';

import event_botoes from './event_botoes'
import { hiden_linhas_tensao, hiden_linhas_tensao_pos_for, options_tensao,Hiden_linha1_tensao } from './Tensao/hiden_linhas_tensao'
import { hiden_linhas_corrente, hiden_linhas_corrente_pos_for, options_corrente,Hiden_linha1_corrente} from './Corrente/hidden_linhas_corrente'
import {hiden_linhas_potAparente, hiden_linhas_potAparente_pos_for, options_potAparente,Hiden_linha1_potAparente} from './potAparente/hidden_linhas_potAparente'
import {fator_potencia , fator_potencia_total} from './Fator_Pot/fator_pot'

global.tempo_aux_para_enviar_backend = 0;
global.tempo_para_enviar_backend = 0


global.esconde_linha1_tensao = 100


global.esconde_linha1_corrente = 100

global.esconde_linha1_potAparente = 100
const data  =  new Date()

var horas_atual = data.getHours()
        console.log('horas atual: ', horas_atual)
event_botoes()

export default function Home() {


  const [corrente, setCorrente] = useState([['', 'Corrente'],['', 0]]);

  const [tensao, setTensao] = useState([['', 'Tensão'], ['', 0]])

  const [potAparente, setpotAparente] = useState([['', 'potAparente'], ['', 0]])

  const [fpot1, setFpot1] = useState([['Label', 'Value'],['FPA', 0]])

  const [fpotTotal , setFpotTotal] = useState([['', 'Fator de Potencia Geral'], ['', 0]])


 

  async function atualiza_grafico(e) {

    e.preventDefault()
    if (global.tempo_aux_para_enviar_backend == 0) {
      var minutes_recebidos = '5'
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    } else {
      var minutes_recebidos = global.tempo_aux_para_enviar_backend
        global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    }
    console.log('estrou aqui minutos', minutes_recebidos)
    await api.post('/', global.tempo_para_enviar_backend).then(response => {

      var tamanho = (response.data[0])
      console.log('estrou aqui', tamanho)
      var tamanho = tamanho[0].length

      var Vetor_tensao = hiden_linhas_tensao(global.esconde_linha1_tensao)
      var Vetor_corrente = hiden_linhas_corrente(global.esconde_linha1_corrente)
      var Vetor_potAparente = hiden_linhas_potAparente(global.esconde_linha1_potAparente)
      var Vetor_FatorPotTotal = [['', 'Fator_POt'],['', 0]]
      for (var i = 0; i < tamanho; i++) {

        var Vetor_Corrente = hiden_linhas_corrente_pos_for(response.data, i, Vetor_corrente, global.esconde_linha1_corrente)
        var Vetor_tensao = hiden_linhas_tensao_pos_for(response.data, i, Vetor_tensao, global.esconde_linha1_tensao)
        var Vetor_potAparente = hiden_linhas_potAparente_pos_for(response.data, i, Vetor_potAparente, global.esconde_linha1_potAparente)
        var Vetor_FatorPotTotal = fator_potencia_total(response.data,Vetor_FatorPotTotal,i)
        
      }
      var fator_pot1

      console.log(Vetor_Corrente)

      fator_pot1 = fator_potencia(response.data,(tamanho-1))
      setFpot1([['Label', 'Value'],['FPA', fator_pot1]])
      setFpotTotal(Vetor_FatorPotTotal)
      setCorrente(Vetor_Corrente)
      setTensao(Vetor_tensao)
      setpotAparente(Vetor_potAparente)


    })


  }
  


  async function fun_Hiden_linha1_corrente(indice){
  [global.esconde_linha1_corrente] = Hiden_linha1_corrente(indice,global.esconde_linha1_corrente)
}

async function fun_Hiden_linha1_tensao(indice){
  [global.esconde_linha1_tensao] = Hiden_linha1_tensao(indice,global.esconde_linha1_tensao)
}

async function fun_Hiden_linha1_potAparente(indice){
  [global.esconde_linha1_potAparente] = Hiden_linha1_potAparente(indice,global.esconde_linha1_potAparente)
}


async function mqtt_Liga(){
  
  const response = await api.post('/mqtt/liga', '1')

  //console.log(response)
}

async function mqtt_desliga(){
  
  const response = await  api.post('/mqtt/desliga', 0)
}
  async function clickBotao_de_tempo(id, text) {

    global.tempo_aux_para_enviar_backend = id
    document.getElementById('esconde').textContent = text
  }




  useEffect(async () => {
    if (global.tempo_aux_para_enviar_backend == 0) {
      var minutes_recebidos = '5'
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    } else {

      var minutes_recebidos = global.tempo_aux_para_enviar_backend
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    }
    await api.post('/', global.tempo_para_enviar_backend).then(response => {

      

      var tamanho = (response.data[0])
      var tamanho = tamanho[0].length





      var Vetor_tensao = hiden_linhas_tensao(global.esconde_linha1_tensao)
      var Vetor_corrente = hiden_linhas_corrente(global.esconde_linha1_corrente)
      var Vetor_potAparente = hiden_linhas_potAparente(global.esconde_linha1_potAparente)
      var Vetor_FatorPotTotal = [['', 'Fator_POt'],['', 0]]
      for (var i = 0; i < tamanho; i++) {

        var Vetor_Corrente = hiden_linhas_corrente_pos_for(response.data, i, Vetor_corrente, global.esconde_linha1_corrente)

        var Vetor_tensao = hiden_linhas_tensao_pos_for(response.data, i, Vetor_tensao, global.esconde_linha1_tensao)

        var Vetor_potAparente = hiden_linhas_potAparente_pos_for(response.data, i, Vetor_potAparente, global.esconde_linha1_potAparente)

        var Vetor_FatorPotTotal = fator_potencia_total(response.data,Vetor_FatorPotTotal,i)

      }
      var fator_pot1
    
      fator_pot1 = fator_potencia(response.data,(tamanho-1))
      console.log('fator de potencia: ', fator_pot1)
      setFpot1([['Label', 'Value'],['FPA', fator_pot1]])
      setFpotTotal(Vetor_FatorPotTotal)
      setCorrente(Vetor_Corrente)
      setTensao(Vetor_tensao)
      setpotAparente(Vetor_potAparente)



      //console.log(tamanho)



    })
  }, [corrente])




  var options1_corrente = options_corrente(global.esconde_linha1_corrente)

  var options1_tensao = options_tensao(global.esconde_linha1_tensao)

  var options1_potAparente = options_potAparente(global.esconde_linha1_potAparente)
  ////////////////////////////////////////////////

  



   

    
  /////////////////////////////////////////////////

  return (
    <div class='pai'>

      <div class='menu'>

        <img src={logoFortesol} alt='logo' />


        <div class='atualiza'>

          <button class='bt_atualiza' id='esconde' title="Ultimos">Ultimos</button>
          <div class='mystyle' id='mostra1'>

            <div class='div_button'>
              <button type='button' class='button' onClick={(e) => clickBotao_de_tempo(5, "Ultimos 5 minutos")}>5 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(15, "Ultimos 15 minutos")}>15 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(30, "Ultimos 30 minutos")}>30 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(45, "Ultimos 45 minutos")}>45 min</button>
            </div>
          </div>
        </div>

      </div>

      <button class='button_mqtt' onClick={(e) => mqtt_Liga()}>ON</button>
      <button class='button_mqtt' onClick={(e) => mqtt_desliga()}>OFF</button>

      
      <div class='graficos'>
      
      
        <form onSubmit={atualiza_grafico}>

          <Chart onCha

            width={'99vw'}
            height={'50vh'}
            font-size={'2vw'}
            options={options1_corrente}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            //chartType="LineChart"
            data={corrente}
            ScrollBar
            rootProps={{ 'data-testid': '10' }}

          >
          </Chart>

          <button id='button_L_L1_corrente' class='blue1' onClick={(e) => fun_Hiden_linha1_corrente(1)}>Corrente_A</button>
          
          <Chart

            width={'99vw'}
            height={'50vh'}
            /* width={'100%'}
            height={'100%'} */
            options={options1_tensao}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            //chartType="LineChart"
            data={tensao}
            ScrollBar
            rootProps={{ 'data-testid': '10' }}

          >
          </Chart>
          
          <button id='button_L_L1_tensao' class='blue1' onClick={(e) => fun_Hiden_linha1_tensao(1)}>Tensão_A</button>
         
          <Chart onCha

            width={'99vw'}
            height={'50vh'}
            /* width={'100%'}
            height={'100%'} */
            options={options1_potAparente}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            //chartType="LineChart"
            data={potAparente}
            ScrollBar
            rootProps={{ 'data-testid': '10' }}

          >
          </Chart>

          <button id='button_L_L1_potAparente' class='blue1' onClick={(e) => fun_Hiden_linha1_potAparente(1)}>potAparente_A</button>
          



          <div class='gauge'>
          
          
          <Chart

          width={'99vw'}
          height={'50vh'}
          chartType="Gauge"
          loader={<div>Loading Chart</div>}
          options={
              
            {
            title: 'Fator de Potência Total',
            hAxis: {title: 'data',
             },
             vAxis: {title: 'Corrente'},
             backgroundColor: 'transparent',
          }}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          //chartType="LineChart"
          data={fpotTotal}
          ScrollBar
          rootProps={{ 'data-testid': '10' }}

          >
          </Chart>
          
          <h>Fator de Potencia</h>
          
          
          <Chart
            width={'40vw'}
            height={'36vh'}
            chartType="Gauge"
            loader={<div>Loading Chart</div>}
            
            options={
              
              {
              title: 'Gráficos de Tensão',
              greenFrom: 0.92,
              greenTo: 1,
              redFrom: 0,
              redTo: 0.5,
              yellowFrom: 0.5,
              yellowTo: 0.92,
              minorTicks: 0.1,
              min: 0,
              max: 1 
            }}
            rootProps={{ 'data-testid': '1' }}
            data={fpot1}

          ></Chart>
          </div>
      
        </form>


      </div>



    </div>
  )
}