import leia from 'readline-sync'
import Exercicio01 from './Exercicio1';
import Exercicio02 from './Exercicio2';
import Exercicio03 from './Exercicio3';
import Exercicio04 from './Exercicio4';
import Exercicio05 from './Exercicio5';
import Exercicio06 from './Exercicio6';
import Exercicio07 from './Exercicio7';
import Exercicio08 from './Exercicio8';
import Exercicio09 from './Exercicio9';
import Exercicio10 from './Exercicio10';
import Exercicio11 from './Exercicio11';
import Exercicio12 from './Exercicio12';
import Exercicio13 from './Exercicio13';
import Exercicio14 from './Exercicio14';
import Exercicio15 from './Exercicio15';

var opcao = leia.keyInSelect(["Exercicio 1", "Exercicio 2", "Exercicio 3", "Exercicio 4",
 "Exercicio 5", "Exercicio 6", "Exercicio 7", "Exercicio 8", "Exercicio 9", "Exercicio 10",
  "Exercicio 11", "Exercicio 12", "Exercicio 13", "Exercicio 14", "Exercicio15"]) + 1;

const exercicios = {
    1: Exercicio01,
    2: Exercicio02,
    3: Exercicio03,
    4: Exercicio04,
    5: Exercicio05,
    6: Exercicio06,
    7: Exercicio07,
    8: Exercicio08,
    9: Exercicio09,
    10: Exercicio10,
    11: Exercicio11,
    12: Exercicio12,
    13: Exercicio13,
    14: Exercicio14,
    15: Exercicio15
} as { [key: number]: {} => void};

exercicios{opcao}();