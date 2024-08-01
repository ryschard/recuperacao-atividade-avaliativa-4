
# Recuperação Atividade Avaliativa IV - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Lógica de Programação
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A recuperação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Cada questão vale 2 pontos.
- Conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais, dados e de repetição.
- A entrega deverá ser feita no AVA, enviando apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores, e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.

---

### Questão 02
Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem. Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.

---

### Questão 03
Crie um algoritmo que leia uma quantidade `n` de números inteiros fornecida pelo usuário e armazene esses números em um vetor. O
algoritmo parar de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média
desses números, a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

---

### Questão 04
Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.

```javascript
var char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&']
```

---

### Questão 05
Você deve desenvolver um programa para verificar se um baralho de cartas está viciado. O baralho possui 52 cartas, divididas igualmente 
entre quatro naipes: copas, espadas, ouros e paus. O algoritmo deve fazer o sorteio fazer 1000 sorteios de naipes e contar quantas
vezes cada naipe foi sorteado em uma série de sorteios e verificar se algum naipe tem uma frequência maior que 30%. Se houver, o programa
deve indicar que o baralho pode estar viciado. 