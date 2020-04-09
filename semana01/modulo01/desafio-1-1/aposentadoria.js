// Cálculo de aposentadoria

console.log('Cálculo de aposentadoria')

// Declaração de Constantes
const nome = 'Marinete'
const sexo = 'F'
const idade = 55
const contribuicao = 37

const tempoTotal = idade + contribuicao

console.log('---------------------------------------------')
console.log(`${nome}, Sexo: ${sexo}, Idade: ${idade}`)
console.log(`Contribuição: ${contribuicao}, Total: ${tempoTotal}`)

console.log('---------------------------------------------')

// Verificação da Aposentadoria utilizando Operadores Lógicos && (and), || (or) 
if ((sexo === 'F' && contribuicao >= 30 && tempoTotal >= 85) ||
    (sexo === 'M' && contribuicao >= 35 && tempoTotal >= 95)) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}