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

        var butao_hinde_L1_potAparente = document.getElementById('button_L_L1_potAparente')
        butao_hinde_L1_potAparente.addEventListener("click", function () {



          if (butao_hinde_L1_potAparente.className == 'blue1') {
            butao_hinde_L1_potAparente.classList.replace('blue1', 'red');
            console.log('entrou aqui')
          }

          else {
            //butao_hinde_L1.classList.toggle('red')
            butao_hinde_L1_potAparente.classList.replace('red', 'blue1');

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