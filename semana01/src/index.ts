import leia from 'readline-sync'
import Exercicio01 from './Exercicio1';
import Exercicio02 from './Exercicio2';
import Exercicio03 from './Exercicio3';
import Exercicio04 from './Exercicio4';
import Exercicio05 from './Exercicio5';

var opcao = leia.keyInSelect(["Exercicio 1", "Exercicio 2", "Exercicio 3", "Exercicio 4"]) + 1;

switch (opcao) {
    case 1:
        Exercicio01();
        break;
    case 2:
        Exercicio02();
        break;
    case 3:
        Exercicio03();
        break;
    case 4:
        Exercicio04();
        break;
    case 5:
        Exercicio05();
        break;
}


