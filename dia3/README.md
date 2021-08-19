# Desafio do dia 03

## Exercício 1

Crie um arquivo `src/form.js`, e importe-o no `src/main.js`.
No `index.html`, crie um formulário com apenas um campo: um input de texto que irá receber o nome de uma pessoa.
No JS, você deverá manipular o valor desse input, fazendo com que, enquanto o valor está sendo digitado, 
o primeiro caractere de cada palavra seja uma letra maiúscula, a menos que as palavra sejam "de", "da", "do" ou "dos".
Todas as outras letras devem ser minúsculas.

**Exemplo:** 

Se for digitado no campo: `rubens de oliveira`, o que deverá ser exibido no campo é `Rubens de Oliveira`.

Se for digitado `rOMualdo ferrEira DoS sanTOS NetO`, o que deverá ser exibido no campo é `Romualdo Ferreira dos Santos Neto`

## Exercício 2

Via JavaScript, adicione ao formulário um `select` do tipo `multiple` com algumas cores para seleção.

Crie opções para, pelo menos, 5 cores diferentes.

Conforme as cores vão sendo selecionadas, você deverá adicionar elementos no HTML com as cores que foram selecionadas.
Esses elementos podem ser `div`s mesmo, de tamanho `100px x 100px`, uma ao lado da outra, ou como você quiser exibir.

Fique à vontade para estilizar como achar melhor: o que eu preciso que você faça é apenas exibir na tela, de forma visual,
todas as cores que foram selecionadas, enquanto elas estão sendo selecionadas.

Exemplo: se apenas uma cor for selecionada, um quadrado pintado com essa cor deve ser exibido na tela.
Se duas cores forem selecionadas, dois quadrados devem aparecer na tela, um com cada uma das cores selecionadas.
Se houver uma "desseleção", a cor que foi "desselecionada" deve ser removida da tela.

## Exercício 3

Vamos agora criar um formulário para fazer um cadastro de carros.

Crie um novo arquivo, `src/cars.js`, e importe-o no `src/main.js`. 
No HTML, crie um novo formulário, e adicione os seguintes campos para cadastro de um carro:

Imagem (URL), Marca / Modelo, Ano, Placa, Cor e um botão para enviar o formulário.

Crie também uma tabela no HTML que irá receber os dados dos carros criados. 
Ao preencher todos os dados e submeter o formulário, você deve criar uma nova linha na tabela
com os dados do carro criado, limpar o formulário para receber um novo cadastro, e dar foco no primeiro campo 
do formulário (campo imagem).
