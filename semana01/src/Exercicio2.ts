import leia from 'readline-sync'

export default function Exercicio02(){
    let largura = leia.questionInt("Digite a largura do retangulo: ")
    let altura = leia.questionInt("Digite a altura do retangulo: ")
    let area = largura * altura
    console.log("Seu retangulo tem ", area, "m²");
}