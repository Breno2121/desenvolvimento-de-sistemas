import leia from 'readline-sync'

export default function Exercicio13() {
    var numeroCliente = leia.questionInt("Digite quantos clientes deseja cadastrar: ")
    var clientes = [];
    var valor = [];

    for (var i = 0; i < numeroCliente; i++) {
        let cliente = leia.question(`Digite o nome do cliente ${i + 1}: `)
        let valorCliente = leia.questionFloat(`Digite o valor gasto: `);

        clientes[i] = cliente
        valor[i] = valorCliente
    }
    console.log(clientes)
    console.log(valor)


    // cliente1 > 20 && console.log(cliente1)


}