import leia from 'readline-sync'

export default function Exercicio10(){
    let digito = leia.questionInt("Digite qualquer numero: ");

    if(digito % 2 === 0){
        console.log("O numero e PAR");
    } else{
        console.log("O numero e IMPAR");
    }
}