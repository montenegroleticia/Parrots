// Array de cartas
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
// Debugger para controlar pelo console
debugger
// Perguntando quantas cartas o jogador quer
let quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
quantidade();
function quantidade(){
    while (quantidadeCartas < 3 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
    }   
    criarCartas();
}
// Criar cartas
function criarCartas(){
    let indice = 0 
    while(indice < quantidadeCartas){
        cartasEscolhidas.push(
            `<li class="card" data-test="card" onclick="spinCard(this)">
                <div class="front-face face">
                    <img data-test="face-down-image" src="./midia/back.png" alt="Papagaio verde">
                </div>
                <div class="back-face face">
                    <img data-test="face-up-image" src= ${cartas[indice]} alt="Papagaio em gif">
                </div>
            </li>`);
        indice++;
    }
    distribuirCartas();
}
function distribuirCartas(){
    let contador = 0;
    cartasEscolhidas.sort(comparador);
    const ul = document.querySelector("ul");
    while(contador < cartasEscolhidas.length){
        ul.innerHTML = ul.innerHTML + cartasEscolhidas[contador];
        contador++;
    }
    contarTempo();
}
function comparador() { 
	return Math.random() - 0.5; 
}
// Virar carta
function spinCard(gira){
    document.querySelector(".card");
    gira.classList.toggle("virar");
}
//Comparar cartas
function comparar(){
    if(){}
}
// Contar o tempo
let tempo = 0;
function contarTempo(){
    intervalo = setInterval(aumentar, 1000);
}
function aumentar(){
    tempo++;
    document.querySelector(".timer").innerHTML = tempo;
}
// Recomeçar o jogo
function recomeço(){
    alert("Você ganhou com %{jogadas} jogadas! A duração do jogo foi de %{tempo} segundos!");
    const reiniciar = prompt("Deseja reiniciar a partida? *sim/não*");
    while ( reiniciar !== "sim" && reiniciar !== "não"){
        reiniciar = prompt("Deseja reiniciar a partida? *sim/não*");
    }
    if (reiniciar === "sim"){
        quantidadeCartas = prompt("Com quantas cartas você quer jogar? *de 4-14, apenas números pares*");
        quantidade();
    }
}