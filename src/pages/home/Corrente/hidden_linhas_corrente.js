import Options_graficos_corrente from './options_grapf_corrente'

const Options_de_graficos_corrente = new Options_graficos_corrente()

export function hiden_linhas_corrente(esconde_linha1_corrente) {
    
    if (esconde_linha1_corrente == 100) {
        var Vetor_corrente = [['', 'corrente a']]
    }
   
    else {
        
        var Vetor_corrente = [['', 'Corrente'],['', 0]]
    }

    return Vetor_corrente
}


export function hiden_linhas_corrente_pos_for(response, i, Vetor_corrente, esconde_linha1_corrente) {

    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]


    var corrente1 = response[1]
    var corrente1 = corrente1[0]

   
    if (esconde_linha1_corrente != 100) {

        var Vetor_corrente = [['', 'Corrente'],['', 0]]
    }
    

    
    else {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente1[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }


    return Vetor_corrente
}


export function options_corrente(esconde_linha1_corrente) {
    
    if (esconde_linha1_corrente != 100) {

        var options1_corrente = Options_de_graficos_corrente.optios5()

    }
    
    else {
        var options1_corrente = Options_de_graficos_corrente.optios6()
    }

    return options1_corrente
}

export function Hiden_linha1_corrente(indice,esconde_linha1_corrente) {

    if (indice == 1) {
        if (esconde_linha1_corrente != 100) {
          esconde_linha1_corrente = 100
  
        }
  
        else {
          esconde_linha1_corrente = 0
  
        }
  
      }
  
    

      return [esconde_linha1_corrente]
}

