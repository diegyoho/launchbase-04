// Cálculo de IMC

console.log('Cálculo de IMC')

// Declaração de Constantes
const nome = 'Diego'
const peso = 65
const altura = 1.70

// Cálculo
const imc = peso / (altura * altura)

console.log('---------------------------------------------')
console.log(`${nome}, Peso: ${peso}kg, Altura: ${altura}cm`)

console.log('---------------------------------------------')
console.log(`IMC: ${imc}`)
console.log('---------------------------------------------')

// Verificação do Nível de Obesidade utilizando Múltiplas Condicionais
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
if (imc < 18.5) {
    console.log(`${nome}, você está abaixo do peso ideal!`)
} else if (imc < 25) {
    console.log(`${nome}, você está com o peso ideal!`)
} else if (imc < 30) {
    console.log(`${nome}, você está acima do peso ideal!`)
} else if (imc < 35) {
    console.log(`${nome}, você está com obesidade grau 1!`)
} else if (imc < 40) {
    console.log(`${nome}, você está com obesidade grau 2!`)
} else {
    console.log(`${nome}, você está com obesidade mórbida!`)
}