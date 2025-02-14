import leia from 'readline-sync'

export default function Exercicio20() {

    var vetor1: number[] = []
    var vetor2: number[] = []

    for (var i = 0; i < 10; i++) {
        vetor1.push(leia.questionInt("Digite um numero: "));
    }
    for(var i = 0; i < vetor1.length; i++){
        vetor2.push(vetor1[i] * 5)
    }

    console.log(vetor1)
    console.log(vetor2)
}