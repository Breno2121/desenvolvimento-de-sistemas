import leia from 'readline-sync'

export default function Exercicio09() {
    let senha = 1234;
    let senhaDig = 0;
    do {
        senhaDig = leia.questionInt("Digite a senha: ");

        if (senhaDig !== senha) {
            console.log("SENHA INCORRETA.");
        } else {
            console.log("ACESSO LIBERADO!!");
        }
    } while (senha !== senhaDig)
}
