

export function fator_potencia(response) {
    var fator_pot1 = response[7]
    var fator_pot1 = fator_pot1[0]

    var fator_pot2 = response[8]
    var fator_pot2 = fator_pot2[0]

    var fator_pot3 = response[9]
    var fator_pot3 = fator_pot3[0]

    return [fator_pot1,fator_pot2,fator_pot3]

}

export function fator_potencia_total(response,Vetor_FatorPotTotal,i){
    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]

    var fator_pot_total  = response[10]
    var fator_pot_total  = fator_pot_total[0]

    var vetor_junt_fator_pot_total = [data_horas_mimuto[i], fator_pot_total[i]]
    console.log(vetor_junt_fator_pot_total)
    Vetor_FatorPotTotal.push(vetor_junt_fator_pot_total)

    return Vetor_FatorPotTotal
}