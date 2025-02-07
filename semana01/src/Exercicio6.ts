import leia from 'readline-sync'

export default function Exercicio06() {

    let valorcorrida = []
    let totalcorridas = 0;

    for (var i = 1; i <= 5; i++) {
        var valoratual = leia.questionFloat("Digite o valor da corrida 0" + i + ": ");
        var valordesc = valoratual * 0.25
        var valorfinal = valoratual - valordesc
        totalcorridas = totalcorridas + valorfinal
        valorcorrida.push(valorfinal)
        console.log("Valor a pagar: R$", valorfinal)
    }

    for (var i = 0; i < 5; i++) {
        console.log("O valor da corrida 0" + i + " foi: R$: " + valorcorrida[i]);
    }
    console.log(valorcorrida)
    console.log("O valor total do dia foi: R$", totalcorridas)
}
