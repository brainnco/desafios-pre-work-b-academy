# Desafio do dia 02

## Exercício 01 - Imutabilidade

Importe o arquivo `src/immutable.js` no `src/main.js`. Abra o arquivo e olhe o console do navegador.
O resultado dos dois objetos deveria ser diferente. Faça a criação do segundo objeto
de forma imutável.

## Exercício 02 - HOF (Higher Order Function)
Abra o arquivo `src/calculator.js` e importe ele `src/main.js`.

Veja que, nesse arquivo, temos uma função `calculadora` sem implementação, e temos
algumas variáveis que fazem a execução da calculadora. O desafio é fazer a implementação da
calculadora, para que todos os valores no console resultem em `true`.

A implementação deve ser da seguinte forma:
- A função `calculadora` deve receber via argumento uma função, que dirá como o cálculo vai ser feito (olhe para a linha onde foi criada a variável `sum`, por exemplo, para ver a função que está sendo passada para a `calculadora`);
- O retorno da função `calculadora` deve ser uma nova função que espera dois argumentos `a` e `b`: dois números que serão calculados usando a função que foi passada como argumento para `calculadora`; 
- Essa função de retorno deve retornar **a chamada** da primeira função que foi passada via argumento; 
- Os valores `a` e `b` devem ser passados como parâmetro para essa função que está sendo executada.
