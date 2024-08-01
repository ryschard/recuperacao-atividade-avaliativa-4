import leia from "readline-sync"

var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
var comprimento = leia.questionInt("Digite o comprimento da senha desejada:");

comprimento = (comprimento, 10);

if ((comprimento) && comprimento > 0) {
    var senha = '';

    for (var i = 0; i < comprimento; i++) {
        var indiceAleatorio = Math.floor(Math.random() * char.length);
        senha += char[indiceAleatorio];
    }
    console.log("Senha gerada: " + senha);
} else {
    console.log("Comprimento inválido. Por favor, insira um número positivo.");
}
