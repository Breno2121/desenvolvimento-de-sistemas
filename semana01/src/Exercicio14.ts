import leia from 'readline-sync'

export default function Exercicio14() {

    let numeroDigitado = leia.questionInt("informe o numero final: ")

    for (let i = 0; i <= numeroDigitado; i++) {
        console.log(i)
    }
}