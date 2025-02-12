import leia from 'readline-sync'

export default function Exercicio18() {

    for(let i = 10; i <= 1000; i++){
        if (i === 501) {
            i = 900;
        }
        console.log(i)
    }

}