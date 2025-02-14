import leia from 'readline-sync'

export default function Exercicio21() {

    var vetor0: number[] = [];
    var i = 0;
    var total = 0;

    while (i < 5) {
        vetor0.push(leia.questionInt("Digite um numero: "))
        i++;
    }
    vetor0.forEach(function(elemento) {
        total += elemento;
    });

console.log(total)
}