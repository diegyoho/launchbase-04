//Declaração de objeto Empresa Rocketseat
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log('Objeto Empresa')
console.log('---------------------------------------------')
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

//Declaração de objeto Programador
const programador = {
    nome: 'Diego Moreira',
    idade: 23,
    tecnologias: [
        { nome: 'C#/Unity', especialidade: 'Desktop/Web/Mobile' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log('\n')

console.log('Objeto Programador')
console.log('---------------------------------------------')
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
