

export function fator_potencia(response,i) {
    var fator_pot1 = response[5]
    var fator_pot1 = fator_pot1[0]

    
    return fator_pot1[i]

}

export function fator_potencia_total(response,Vetor_FatorPotTotal,i){
    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]

    var fator_pot_total  = response[5]
    var fator_pot_total  = fator_pot_total[0]

    var vetor_junt_fator_pot_total = [data_horas_mimuto[i], fator_pot_total[i]]
    console.log(vetor_junt_fator_pot_total)
    Vetor_FatorPotTotal.push(vetor_junt_fator_pot_total)

    return Vetor_FatorPotTotal
}