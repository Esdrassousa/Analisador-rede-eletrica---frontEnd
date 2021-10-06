import { Component } from "react"
import './style.css'

function event_botoes() {

  return (

    window.addEventListener("load", function (event) {

      var buttonb = document.getElementById("esconde")

      if (buttonb) {

        var butao_hinde_L1_corrente = document.getElementById('button_L_L1_corrente')
        butao_hinde_L1_corrente.addEventListener("click", function () {



          if (butao_hinde_L1_corrente.className == 'blue1') {
            butao_hinde_L1_corrente.classList.replace('blue1', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L1_corrente.classList.replace('red', 'blue1');

          }

        })

        var butao_hinde_L2_corrente = document.getElementById('button_L_L2_corrente')
        butao_hinde_L2_corrente.addEventListener("click", function () {



          if (butao_hinde_L2_corrente.className == 'cinza') {
            butao_hinde_L2_corrente.classList.replace('cinza', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L2_corrente.classList.replace('red', 'cinza');

          }

        })

        var butao_hinde_L3_corrente = document.getElementById('button_L_L3_corrente')
        butao_hinde_L3_corrente.addEventListener("click", function () {



          if (butao_hinde_L3_corrente.className == 'ambar') {
            butao_hinde_L3_corrente.classList.replace('ambar', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L3_corrente.classList.replace('red', 'ambar');

          }

        })

        ///////////////////////////////// TENSAO /////////////////////////

        var butao_hinde_L1_tensao = document.getElementById('button_L_L1_tensao')
        butao_hinde_L1_tensao.addEventListener("click", function () {



          if (butao_hinde_L1_tensao.className == 'blue1') {
            butao_hinde_L1_tensao.classList.replace('blue1', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L1_tensao.classList.replace('red', 'blue1');

          }

        })

        var butao_hinde_L2_tensao = document.getElementById('button_L_L2_tensao')
        butao_hinde_L2_tensao.addEventListener("click", function () {



          if (butao_hinde_L2_tensao.className == 'cinza') {
            butao_hinde_L2_tensao.classList.replace('cinza', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L2_tensao.classList.replace('red', 'cinza');

          }

        })

        var butao_hinde_L3_tensao = document.getElementById('button_L_L3_tensao')
        butao_hinde_L3_tensao.addEventListener("click", function () {



          if (butao_hinde_L3_tensao.className == 'ambar') {
            butao_hinde_L3_tensao.classList.replace('ambar', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L3_tensao.classList.replace('red', 'ambar');

          }

        })

        buttonb.addEventListener("click", function () {
          var container = document.getElementById("mostra1")
          container.classList.toggle("mystyle")
          clickbotao()


        })


        var clickbotao = () => {
          //  var buttonb = document.getElementById("esconde")
          var container = document.getElementById("mostra1")
          container.classList.toggle("mystyle")
          if (container.style.display == 'block') {
            container.style.display = 'none';
            document.removeEventListener('click', handlerClickFora, false)
          } else {
            container.style.display = 'block';
            document.removeEventListener('click', handlerClickFora, false)
          }

          setTimeout(() => { document.addEventListener('click', handlerClickFora, false) }, 200);
        }
        var handlerClickFora = () => {
          var container = document.getElementById("mostra1")

          if (!container.contains(event.target)) {
            container.style.display = 'none';
            //buttonb.style.display = 'none';

            document.removeEventListener('click', handlerClickFora, false);
          }
        }
      }
    })

  )
}

export default event_botoes