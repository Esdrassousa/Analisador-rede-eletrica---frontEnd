import Options_graficos_tensao from './options_graph_tensao'

const Options_de_graficos_tensao = new Options_graficos_tensao()

export function hiden_linhas_tensao(esconde_linha1_tensao) {
    

    if (esconde_linha1_tensao == 100) {
        var Vetor_tensao = [['', 'tensao a']]
    }
   
    else {
        
        var Vetor_tensao = [['', 'Tensão'],['', 0]]
    }

    return Vetor_tensao
}


export function hiden_linhas_tensao_pos_for(response, i, Vetor_tensao, esconde_linha1_tensao) {

    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]


    var tensao1 = response[2]
    var tensao1 = tensao1[0]

    if (esconde_linha1_tensao != 100) {

        var Vetor_corrente = [['', 'Tensão'],['', 0]]
    }

    else {
        var vetor_junt_tensao = [data_horas_mimuto[i], tensao1[i]]
        Vetor_tensao.push(vetor_junt_tensao)
    }

    


    return Vetor_tensao
}


export function options_tensao(esconde_linha1_tensao) {
    
    
    if (esconde_linha1_tensao != 100) {

        var options1_tensao = Options_de_graficos_tensao.optios5()

    }
    
    else {
        var options1_tensao = Options_de_graficos_tensao.optios6()
    }
    
    
    

    return options1_tensao
}

export function Hiden_linha1_tensao(indice,esconde_linha1_tensao) {

    if (indice == 1) {
        if (esconde_linha1_tensao != 100) {
            esconde_linha1_tensao = 100
  
        }
  
        else {
            esconde_linha1_tensao = 0
  
        }
  
      }
    
    
    
      return [esconde_linha1_tensao]
}

