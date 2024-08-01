import leia from "readline-sync"

function verificarBaralhoViciado() {

    var naipes = ['copas', 'espadas', 'ouros', 'paus'];
    var contagem = { 'copas': 0, 'espadas': 0, 'ouros': 0, 'paus': 0 };
    var sorteio = 1000;
    var limiteFrequencia = 0.30;

    for (var i = 0; i < sorteio; i++) {
        var indiceAleatorio = Math.floor(Math.random() * naipes.length);
        var naipeSorteado = naipes[indiceAleatorio];
        contagem[naipeSorteado]++;
    }

    var viciado = false;
    for (var naipe in contagem) {
        var frequencia = contagem[naipe] / sorteio;
        if (frequencia > limiteFrequencia) {
            console.log(naipe + ' foi sorteado ' + frequencia * 100 + '% das vezes.');
            viciado = true;
        }
    }

    if (viciado) {
        console.log("O baralho pode estar viciado.");
    } else {
        console.log("O baralho não parece estar viciado.");
    }
}

verificarBaralhoViciado();
