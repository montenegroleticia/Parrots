//Array de cartas
const cartas = [];

debugger

//Perguntando quantas cartas o jogador quer
let quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
quantidade();
function quantidade(){
    while (quantidadeCartas < 3 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
    }   
}

//Inserindo as cartas no jogo
while(cartas.length == quantidadeCartas){
    document.querySelector("img");
    cartas.push(".card");
}

// Embaralhar cartas
cartas.sort(comparador);

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

// Recomeçar o jogo
function recomeço(){
    alert("Você ganhou com %{} jogadas!");
    const reiniciar = prompt("Deseja reiniciar a partida? *s/n*");
    if ( reiniciar === "s"){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
        quantidade();
    }
}