import leia from 'readline-sync'

export default function Exercicio19() {

    let numeroDigitado;
    let qtdNumeroRange = 0;

    do {
        numeroDigitado = leia.questionInt("Digite um numero: ")
        if (numeroDigitado > 100 && numeroDigitado < 200) {
            qtdNumeroRange++;
        }
    } while (numeroDigitado !== 0);

    console.log(`Teve ${qtdNumeroRange} numeros entre 100 e 200.`)

}