function calculadora (callback) {
}

const sum = calculadora((a, b) => a + b)
const sub = calculadora((a, b) => a - b)
const mult = calculadora((a, b) => a * b)
const div = calculadora((a, b) => a / b)

console.log('Somar 1 e 2 = 3:', sum(1, 2) === 3)
console.log('Subtrair 4 de 20 = 16:', sub(20, 4) === 16)
console.log('Multiplicar 3 com 3 = 9:', mult(3, 3) === 9)
console.log('Dividir 15 por 5 = 3:', mult(15, 5) === 3)
