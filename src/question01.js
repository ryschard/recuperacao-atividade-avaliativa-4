import leia from "readline-sync"

var nomes = [];
var idades = [];

for (var i = 0; i < 5; i++) {
    var nome = leia.question(`Digite o nome da pessoa ${i + 1}: `);
    var idade = leia.question(`Digite a idade de ${nome}: `);
    
    nomes.push(nome);
    idades.push(idade);
}

var maisNovoIndex = 0;
var maisVelhoIndex = 0;

for (var i = 1; i < idades.length; i++) {
    if (idades[i] < idades[maisNovoIndex]) {
        maisNovoIndex = i;
    }
    if (idades[i] > idades[maisVelhoIndex]) {
        maisVelhoIndex = i;
    }
}

console.log(`A pessoa mais nova é ${nomes[maisNovoIndex]} com ${idades[maisNovoIndex]} anos.`);
console.log(`A pessoa mais velha é ${nomes[maisVelhoIndex]} com ${idades[maisVelhoIndex]} anos.`);

