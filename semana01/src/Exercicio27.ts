import leia from 'readline-sync'

export default function Exercicio27() {

    let vetor: number[] = []
    let repetidos: number[] = []


    for (let i = 0; i < 10; i++) {
        vetor.push(Math.trunc(Math.random() * 100))
    }

    for (let i = 0; i < vetor.length; i++) {
        for (let j = i; j < vetor.length; i++) {
            if (i !== j && vetor[i] === vetor[j]){
                repetidos.push(vetor[i])
            }
        }
    }


}