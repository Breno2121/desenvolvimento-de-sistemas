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
import Exercicio16 from './Exercicio16';
import Exercicio17 from './Exercicio17';
import Exercicio18 from './Exercicio18';
import Exercicio19 from './Exercicio19';
import Exercicio20 from './Exercicio20';
import Exercicio21 from './Exercicio21';
import Exercicio22 from './Exercicio22';
import Exercicio23 from './Exercicio23';
import Exercicio24 from './Exercicio24';
import Exercicio25 from './Exercicio25';
import Exercicio26 from './Exercicio26';
import Exercicio27 from './Exercicio27';
import Exercicio28 from './Exercicio28';
import Exercicio29 from './Exercicio29';
import Exercicio30 from './Exercicio30';

var opcao = leia.keyInSelect(["Exercicio 1", "Exercicio 2", "Exercicio 3", "Exercicio 4", "Exercicio 5", "Exercicio 6", "Exercicio 7", "Exercicio 8",
  "Exercicio 9", "Exercicio 10", "Exercicio 11", "Exercicio 12", "Exercicio 13", "Exercicio 14", "Exercicio 15", "Exercicio 16", "Exercicio 17",
  "Exercicio 18", "Exercicio 19", "Exercicio 20", "Exercicio 21", "Exercicio 22", "Exercicio 23", "Exercicio 24", "Exercicio 25", "Exercicio 26",
  "Exercicio 27", "Exercicio 28", "Exercicio 29", "Exercicio 30"]) + 1;

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
  15: Exercicio15,
  16: Exercicio16,
  17: Exercicio17,
  18: Exercicio18,
  19: Exercicio19,
  20: Exercicio20,
  21: Exercicio21,
  22: Exercicio22,
  23: Exercicio23,
  24: Exercicio24,
  25: Exercicio25,
  26: Exercicio26,
  27: Exercicio27,
  28: Exercicio28,
  29: Exercicio29,
  30: Exercicio30
} as { [key: number]: () => void }

exercicios[opcao]();
