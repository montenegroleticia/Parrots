//Perguntando quantas cartas o jogador quer
let quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");

while (quantidadeCartas < 3 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
    quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
}
