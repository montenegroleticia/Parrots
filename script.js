//Array de cartas
const cartas = 
["./midia/bobrossparrot.gif", 
"./midia/bobrossparrot.gif",
"./midia/explodyparrot.gif", 
"./midia/explodyparrot.gif",
"./midia/fiestaparrot.gif", 
"./midia/fiestaparrot.gif",
"./midia/metalparrot.gif",
"./midia/metalparrot.gif",
"./midia/revertitparrot.gif",
"./midia/revertitparrot.gif",
"./midia/tripletsparrot.gif",
"./midia/tripletsparrot.gif",
"./midia/unicornparrot.gif",
"./midia/unicornparrot.gif"];
const cartasEscolhidas = [];
//Debugger para controlar pelo console
debugger
//Perguntando quantas cartas o jogador quer
let quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
quantidade();
function quantidade(){
    while (quantidadeCartas < 3 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
    }   
    criarCartas();
}
//Criar cartas
function criarCartas(){
    let indice = 0 
    while(indice < quantidadeCartas){
        cartasEscolhidas.push(
            `<li class="card" onclick="spinCard(this)">
                <div class="front-face face">
                    <img src="./midia/back.png" alt="Papagaio verde">
                </div>
                <div class="back-face face">
                    <img src= ${cartas[indice]} alt="Papagaio em gif">
                </div>
            </li>`);
        indice++;
    }
    distribuirCartas();
}
function distribuirCartas(){
    cartasEscolhidas.sort(comparador);
    const ul = document.querySelector("ul");
    ul.innerHTML = ul.innerHTML + cartasEscolhidas;
}
function comparador() { 
	return Math.random() - 0.5; 
}
/*Virar carta
function spinCard(girar){
    alert('oi');
}*/
// Recomeçar o jogo
function recomeço(){
    alert("Você ganhou com %{} jogadas!");
    const reiniciar = prompt("Deseja reiniciar a partida? *sim/não*");
    if ( reiniciar === "sim"){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
        quantidade();
    }
}
/*
<li class="card" onclick="spinCard(this)">
                  <div class="front-face face">
                    <img src="./midia/back.png" alt="Papagaio verde">
                  </div>
                  <div class="back-face face">
                    <img src="./midia/unicornparrot.gif" alt="Papagaio com cabelo preto">
                  </div>
                </li> */