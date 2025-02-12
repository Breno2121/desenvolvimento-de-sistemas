import leia from 'readline-sync'

export default function Exercicio16() {
    
    let valorFim = 1999;

    for(var valorInicio = 1000; valorInicio < valorFim; valorInicio++){
        if(valorInicio % 11 === 5){
            console.log(valorInicio)
        }
    }

}