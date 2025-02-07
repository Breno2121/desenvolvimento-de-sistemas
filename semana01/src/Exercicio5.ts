import leia from 'readline-sync'

export default function Exercicio05() {
    let opcaoconverter = leia.keyInSelect(["Fahrenheit", "kelvin"]) + 1;

    switch (opcaoconverter) {
        case 1:
            let temp = leia.questionFloat("Digite a temperatura a ser convertida para fahrenheit: ");
           let tempfahrenheit = (temp * 1.8) + 32;
            console.log("Temperatura em fahrenheit: ", tempfahrenheit, "°F ");
           break;
        case 2:
            let tempcelsius = leia.questionFloat("Digite a temperatura a ser convertida para Kelvin: ");
           let tempkelvin = tempcelsius + 273.15;
            console.log("Temperatura em Kelvin: ", tempkelvin, "°F ");
           break;
    }

}