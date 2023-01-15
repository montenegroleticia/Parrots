let intervalo;
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
            `<li class="card ${cartas[indice]}" data-test="card" onclick="spinCard(this)">
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
// Contar o tempo
let tempo = 0;
function contarTempo(){
    intervalo = setInterval(aumentar, 1000);
}
function aumentar(){
    tempo++;
    document.querySelector(".timer").innerHTML = tempo;
}
// Virar cartas
let escolha1, escolha2;
let jogadas = 0;
function spinCard(gira){
    jogadas++;
    if (escolha1 === undefined){
        escolha1 = gira;
        gira.classList.add("virar");
    } else if (escolha2 === undefined){
        escolha2 = gira;
        gira.classList.add("virar");
        setTimeout(comparar, 1000);
    }
}
// Comparar cartas
function comparar(){
    let carta1 = escolha1.classList.value;
    let carta2 = escolha2.classList.value;
    if(carta1 !== carta2){
        escolha1.classList.remove("virar");
        escolha2.classList.remove("virar");
    } else {
        setTimeout(fim, 1000);
    }
    escolha1 = undefined;
    escolha2 = undefined;
}
// Fim do jogo
function fim(){
    let jogoFim = document.querySelectorAll(".virar");
    if(jogoFim.length == quantidadeCartas){
        clearInterval(intervalo);
        alert('Você ganhou com ' + jogadas + ' jogadas! A duração do jogo foi de ' + tempo + ' segundos!');
    }
}
function recomeco(){
    const reiniciar = prompt("Deseja reiniciar a partida? *sim/não*");
        while ( reiniciar !== "sim" && reiniciar !== "não"){
            reiniciar = prompt("Deseja reiniciar a partida? *sim/não*");
        }
        if (reiniciar === "sim"){
            location.reload();
        }
    }
}