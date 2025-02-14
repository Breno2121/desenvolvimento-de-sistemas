import leia from 'readline-sync'

export default function Exercicio24(){
    
    var vetor: number[] = []
    var vetorinv: number[] = []
    var i = 0;


while(i < 10){
    vetor[i] = leia.questionInt("Digite um numero: ")
    i++;
}
i -= 1;
while(i >= 0){
    vetorinv.push(vetor[i])
    i--;
}

console.log(vetor)
console.log(vetorinv)

}