import leia from 'readline-sync'

export default function Exercicio08(){

    let opcao = leia.keyInSelect(['R$10,00', 'R$25,00', 'R$50,00', 'outro']) + 1

    if(opcao === 1){
        console.log("Obrigado, Voce doou R$10,00")
    } else if(opcao === 2){
        console.log("Obrigado, Voce doou R$25,00")
    } else if(opcao === 3){
        console.log("Obrigado, Voce doou R$50,00")
    } else {
        let valor = leia.questionFloat("Informe o valor que deseja doar: ")
        console.log("Obrigado, Voce doou R$", valor)
    }

}