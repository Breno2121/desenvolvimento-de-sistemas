import leia from 'readline-sync'

export default function Exercicio23() {

    var vetor: number[] = []

    for (var i = 0; i < 15; i++) {
        vetor.push(leia.questionInt("Digite um numero: "))
    }
    vetor.forEach(element => {
        if (element >= 10) {
            console.log(element)
        }
    });

}