import leia from "readline-sync"

var numeros = [];
var numero;

while (true) {
    numero = leia.questionInt("Digite um numero inteiro (0 para finalizar):");
    
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

if (numeros.length === 0) {
    console.log("Nenhum número foi digitado.");
} else {

    var soma = 0;
    var maior = numeros[0];
    var menor = numeros[0];
    
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    var media = soma / numeros.length;
    
    console.log("Soma dos números: " + soma);
    console.log("Média dos números: " + media);
    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);
}
