// Definindo as variáveis
let nomeHeroi = "Douglas";  // nome do herói
let xpHeroi = 10005;  // quantidade de XP do herói

// Estrutura de decisão para verificar a classificação do herói
let classificacao;

if (xpHeroi < 1000) {
    classificacao = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    classificacao = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    classificacao = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    classificacao = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    classificacao = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    classificacao = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

// Exibindo a mensagem com a classificação
console.log(`O herói ${nomeHeroi} com ${xpHeroi} XP é classificado como ${classificacao}.`);

