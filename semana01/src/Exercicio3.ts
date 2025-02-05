import leia from 'readline-sync'

export default function Exercicio03(){
    let idade = leia.questionInt("Digite a sua idade: ")
    let meses = leia.questionInt("Digite quantos meses: ")
    let dia = leia.questionInt("Digite quantos dias: ")

    var total = ((((idade * 12) + meses) * 30) + dia)

    console.log("Voce tem: ", total, "dias de idade.")
}