import leia from 'readline-sync'

export default function Exercicio28() {

    function multiplos() {
        for (var i = 1; i <= 200; i++) {
            if (i % 5 === 0) {
                console.log(i)
            }
        }
    }

    multiplos();
}