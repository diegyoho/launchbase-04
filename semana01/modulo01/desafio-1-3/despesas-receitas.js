// Objeto Usuários
const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; ++i) {
        // Usando a atribuição por adição +=
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment
        soma += numeros[i]
    }

    return soma
}

function calculaSaldo(receitas, despesas) {
    receitas = somaNumeros(receitas)
    despesas = somaNumeros(despesas)

    return receitas - despesas
}

for (let i = 0; i < usuarios.length; ++i) {
    const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)

    // Usando o operador ternário (expressão ? verdadeiro : falso )
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional
    console.log(`${usuarios[i].nome} possui saldo ${saldo >= 0 ? 'POSITIVO' : 'NEGATIVO'} de ${saldo}`)
}