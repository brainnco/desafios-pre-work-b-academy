# Desafio do dia 04

Para esse desafio, você vai encontrar dois diretórios: `app` (frontend, onde 
você vai trabalhar) e `server`, que é o servidor que você irá precisar para os
exercícios desse desafio.

Você vai precisar de dois terminais dessa vez: um para rodar o servidor do `server`,
e outro para rodar o servidor do frontend, que está no diretório `app`.

O `server` foi criado com Node.js, então para colocar ele pra funcionar é bem simples:
abra um terminal, acesse o diretório do `server`, execute `yarn` para instalar as
dependências, e então `yarn start` para subir o servidor.

O servidor vai ficar ouvindo as requisições na porta `3333` do seu `localhost`.

Esse é o mesmo servidor que você me viu rodando na aula 4: é uma API para CRUD 
de carros.

Para quem não conhece o termo, CRUD significa _Create, Read, Update and Delete_,
ou Criar, Ler, Atualizar e Deletar. Basicamente a nossa API vai permitir fazer
essas 4 operações com os carros: cadastrar um carro (Create), obter a lista de
carros cadastrados (Read), atualizar um carro (Update) e remover um carro (Delete).

A URL do servidor que você irá utilizar será sempre a mesma: `http://localhost:3333/cars`.

O que vai mudar serão apenas os **métodos HTTP**, que vão dizer a intenção da requisição.
Mais informações nos exercícios abaixo.

Todos os dados salvos no servidor ficam em memória. Então, sempre que você quiser
"começar de novo", limpando todos os carros cadastrados, você só precisa derrubar
o servidor (usando `Ctrl + C` no terminal onde o servidor está rodando) e colocar
ele para rodar de novo (com `yarn start`).

## Exercício 1

No desafio anterior, você criou um formulário para cadastro de carros. Copie o
formulário e a tabela do exercício anterior para o arquivo `index.html`.

## Exercício 2

Logo que o frontend carregar, deverá ser feito um request para o servidor para
buscar todos os carros que foram cadastrados. Lembre-se que, para **obter** informações,
usamos o método `GET`. 

Como resultado da requisição, você irá receber um array com todos os carros cadastrados.
Se não houverem carros cadastrados, o resultado será um array vazio.

Mostre na tabela os carros cadastrados, e, se não houverem carros, mostre na tabela
apenas uma linha com o texto: "Nenhum carro encontrado".

## Exercício 3

Vamos cadastrar um carro.

Ao preencher o formulário, um novo carro deverá ser cadastrado. Para cadastrar um carro,
você deverá fazer um request do tipo `POST`, e enviar os dados para o servidor.
O servidor espera que o corpo do seu request seja um JSON com os seguintes campos:

| Campo        | Tipo do campo | Descrição                                                                                     |
| ------------ | ------------- | --------------------------------------------------------------------------------------------- |
| `image`      | `string`      | URL da imagem                                                                                 |
| `brandModel` | `string`      | Marca e modelo do carro                                                                       |
| `year`       | `number`      | Ano de fabricação do carro                                                                    |
| `plate`      | `string`      | Placa do carro no formato: ABC-1234 (3 letras, seguidas de um traço, seguida de de 4 números) |
| `color`      | `string`      | A cor do carro. Pode ser em texto ou em hexadecimal                                           |

Após cadastrar o primeiro carro, a linha da tabela que dizia "Nenhum carro encontrado"
deve ser removida, e as informações do carro devem ser exibidas na tabela.

Para todos os outros carros cadastrados, você deverá ir adicionando-os à tabela
um abaixo do outro **se o request de cadastro retornar uma mensagem de sucesso**.

O campo `plate` deve ser único para cada carro, então, se você tentar cadastrar 
um carro com uma placa que já foi cadastrada anteriormente, você obterá um erro.

O erro será recebido com status code `400`, no seguinte formato:

```
{
  "error": true,
  "message": "Aqui virá a mensagem com o erro"
}
```

Exiba a mensagem de erro na tela, quando isso acontecer. Fique à vontade para escolher
como a mensagem de erro será exibida para o usuário, só **não use** o `alert` padrão
do navegador.

Todos os campos são obrigatórios, então um outro possível erro vai acontecer 
quando você tentar enviar algum campo vazio.

## Exercício 4

Não falamos nas aulas, mas nós temos alguns outros métodos HTTP além do `GET` e do `POST`.
E o que vamos usar para este exercício é o método `DELETE`.

Pelo nome, você já deve ter percebido o que ele faz: ao fazer um request para o servidor
com o método `DELETE`, a intenção é **excluir** um carro.

Para fazer a exclusão, você deverá fazer um request enviando no body um JSON apenas com o campo `plate`,
passando a placa do carro que deverá ser deletado.

Para fazer a exclusão à partir da nossa interface, crie uma nova coluna na tabela, onde cada carro terá
seu próprio botão de "Excluir". Ao clicar nesse botão, o request com a deleção deverá ser feito,
e se o request retornar com sucesso, a linha da tabela que contém o carro deverá ser excluída.
