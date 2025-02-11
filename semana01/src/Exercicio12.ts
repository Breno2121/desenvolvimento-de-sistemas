import leia from 'readline-sync'

export default function Exercicio12() {
    let quantidade = leia.questionInt("Digite quantas macas deseja: ")

    if (quantidade < 12) {
        var valor = quantidade * 0.30;
    } else {
        valor = quantidade * 0.25;
    }

    console.log("O valor total e de R$:", valor.toFixed(2));
}

// var valor = "1".padStart(5, "0");
// var valor = "1".padEnd(5, "0");
