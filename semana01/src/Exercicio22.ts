import leia from 'readline-sync'

export default function Exercicio22() {

    var vetor: number[] = []
    var vetorpar: number[] = []

    for (var i = 0; i < 10; i++) {
        vetor.push(leia.questionInt("Digite um numero: "))
    }
    vetor.forEach(element => {
        if (element % 2 === 0) {
            vetorpar.push(element)
        }
    });

    console.log(vetor)
    console.log(vetorpar)

}