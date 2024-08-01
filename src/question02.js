import leia from "readline-sync"

var texto = leia.question("Digite um texto ou palavra:");
var consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
var contagemConsoantes = 0;

for (var i = 0; i < texto.length; i++) {
    var caractere = texto[i];

    if (consoantes.indexOf(caractere) == -1) {
        contagemConsoantes++;
    }
}
console.log("O número de consoantes é: " + contagemConsoantes);
