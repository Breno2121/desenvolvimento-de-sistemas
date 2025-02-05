import leia from 'readline-sync'

export default function Exercicio01(){
    let numero = leia.questionInt("Digite um numero: ")
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    console.log("Seu numero foi: ", numero, "\n", "O Sucessor é: ", sucessor, "\n", "O antecessor é: ", antecessor, ".");
}

