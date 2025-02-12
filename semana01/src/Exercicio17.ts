import leia from 'readline-sync'

export default function Exercicio17() {

    var maior = 0;
    var menor = 0;


    for (var i = 0; i < 5; i++) {
        var numeroDig = (leia.questionInt("Digite um numero: "))
        if (i == 0) {
            menor = numeroDig
            maior = numeroDig
        }
        if (numeroDig > maior) {
            maior = numeroDig
        } else if (numeroDig < menor) {
            menor = numeroDig
        }
    }
    console.log(`O maior numero foi: ${maior}`);
    console.log(`O menor numero foi: ${menor}`);

}