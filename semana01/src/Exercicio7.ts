import leia from 'readline-sync'

export default function Exercicio07() {

    let valorProduto = leia.questionFloat("Informe o valor da venda: ")

    if (valorProduto <= 20) {
        valorProduto = valorProduto * 1.45;

    } else {
        valorProduto = valorProduto * 1.30;
    }
    console.log("O valor do produto é : R$ ", valorProduto.toFixed(2));
}
