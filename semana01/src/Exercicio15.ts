import leia from 'readline-sync'

export default function Exercicio15() {

    let numeroDigitado = leia.questionInt("informe o numero inicial: ")

    for (let i = numeroDigitado; i >= 0; i--) {
        console.log(i)
    }
}
