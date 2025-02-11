import leia from 'readline-sync'

export default function Exercicio11() {
    let placa = leia.question("Digite a placa do veiculo(nao inserir traco): ")

    let ultimoDig = placa.slice(-1);

    if (ultimoDig === "0" || ultimoDig === "1") {
        console.log("Nao pode rodar na segunda-feira");
    } else if (ultimoDig === "2" || ultimoDig === "3") {
        console.log("Nao pode rodar na terca-feira");
    } else    if(ultimoDig === "4" || ultimoDig === "5"){
        console.log("Nao pode rodar na quarta-feira");
    } else     if(ultimoDig === "6" || ultimoDig === "7"){
        console.log("Nao pode rodar na quinta-feira");
    } else     if(ultimoDig === "8" || ultimoDig === "9"){
        console.log("Nao pode rodar na sexta-feira");
    } else {
        console.log("PLACA INVALIDA.")
    }
}