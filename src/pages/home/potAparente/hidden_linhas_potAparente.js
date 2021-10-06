import Options_graficos_potAparente from './options_grapf_potAparente'

const Options_de_graficos_potAparente = new Options_graficos_potAparente()

export function hiden_linhas_potAparente(esconde_linha1_potAparente) {
    
    if (esconde_linha1_potAparente == 100) {
        var Vetor_potAparente = [['', 'potAparente a']]
    }
   
    else {
        
        var Vetor_potAparente = [['', 'potAparente'],['', 0]]
    }

    return Vetor_potAparente
}


export function hiden_linhas_potAparente_pos_for(response, i, Vetor_potAparente, esconde_linha1_potAparente) {

    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]


    var potAparente1 = response[3]
    var potAparente1 = potAparente1[0]

   
    if (esconde_linha1_potAparente != 100) {

        var Vetor_potAparente = [['', 'potAparente'],['', 0]]
    }
    

    
    else {
        var vetor_junt_potAparente = [data_horas_mimuto[i], potAparente1[i]]
        Vetor_potAparente.push(vetor_junt_potAparente)
    }


    return Vetor_potAparente
}


export function options_potAparente(esconde_linha1_potAparente) {
    
    if (esconde_linha1_potAparente != 100) {

        var options1_potAparente = Options_de_graficos_potAparente.optios5()

    }
    
    else {
        var options1_potAparente = Options_de_graficos_potAparente.optios6()
    }

    return options1_potAparente
}

export function Hiden_linha1_potAparente(indice,esconde_linha1_potAparente) {

    if (indice == 1) {
        if (esconde_linha1_potAparente != 100) {
          esconde_linha1_potAparente = 100
  
        }
  
        else {
          esconde_linha1_potAparente = 0
  
        }
  
      }
  
    

      return [esconde_linha1_potAparente]
}

