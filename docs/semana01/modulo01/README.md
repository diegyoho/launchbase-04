<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Resolução dos Desafios Módulo 1 - Introdução a Programação WEB
</h3>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="https://github.com/chicodiegomoreira/launchbase-04/blob/master/LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
  
  <a href="https://www.linkedin.com/in/chicodiegomoreira/" >
    <img alt="My Linkedin" src="https://img.shields.io/badge/-chicodiegomoreira-%230077B5?style=social&logo=linkedin">
  </a>

</p>

<p align="center">
  <a href="#desafio-1-1-primeiros-passos-com-js">Desafio 1-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desafio-1-2-lidando-com-objetos-e-vetores">Desafio 1-2</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desafio-1-3-funções-e-estruturas-de-repetição">Desafio 1-3</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desafio-1-4-aplicação-operações-bancárias">Desafio 1-4</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Desafio 1-1: Primeiros passos com JS
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md">Descrição</a>

### Cálculo de IMC
###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-1/imc.js)!

#### Saída
```
Cálculo de IMC
---------------------------------------------
Diego, Peso: 65kg, Altura: 1.7cm
---------------------------------------------
IMC: 22.49134948096886
---------------------------------------------
Diego, você está com o peso ideal!
```

### Cálculo de aposentadoria
###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-1/aposentadoria.js)!

#### Saída
```
Cálculo de aposentadoria
---------------------------------------------
Marinete, Sexo: F, Idade: 55
Contribuição: 37, Total: 92
---------------------------------------------
Marinete, você pode se aposentar!
```

## Desafio 1-2: Lidando com objetos e vetores
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md">Descrição</a>

###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-2/objetos-vetores.js)!

#### Objeto Empresa
```js
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}
```
#### Saída
```
Objeto Empresa
---------------------------------------------
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```

#### Objeto Programador
```js
const programador = {
    nome: 'Diego Moreira',
    idade: 23,
    tecnologias: [
        { nome: 'C#/Unity', especialidade: 'Desktop/Web/Mobile' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}
```
#### Saída
```
Objeto Programador
---------------------------------------------
O usuário Diego Moreira tem 23 anos e usa a tecnologia C#/Unity com especialidade em Desktop/Web/Mobile
```

## Desafio 1-3: Funções e estruturas de repetição
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md">Descrição</a>

### Usuários e tecnologias, Busca por Tecnologia
###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-3/usuario-techs.js)!

#### Usuários e tecnologias
```js
// Loop para mostrar Usuário no Console
// Uso do método join(), para mostrar as tecnologias separadas por (,) e um espaço
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
for (let i = 0; i < usuarios.length; ++i) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`)
}
```

#### Busca por Tecnologia
```js
function checaSeUsuarioUsaCSS(usuario) {
    const techs = usuario.tecnologias
    for (let i = 0; i < techs.length; ++i) {
        if (techs[i] === 'CSS') {
            return true;
        }
    }

    return false;
}
```

#### Saída
```
Usuário e Tecnologias
-------------------------------------------------------------
Carlos trabalha com HTML, CSS
Jasmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js


Busca por Tecnologias
-------------------------------------------------------------
O usuário Carlos trabalha com CSS
O usuário Jasmine trabalha com CSS
```

### Soma de despesas e receitas
###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-3/despesas-receitas.js)!

#### Soma Números
```js
function somaNumeros(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; ++i) {
        // Usando a atribuição por adição +=
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment
        soma += numeros[i]
    }

    return soma
}
```

#### Calcula Saldo
```js
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
```

#### Saída
```
Salvio possui saldo POSITIVO de 158.10000000000002
Marcio possui saldo NEGATIVO de -33.19999999999999
Lucia possui saldo POSITIVO de 35.49999999999994
```

## Desafio 1-4: Aplicação: Operações bancárias
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md">Descrição</a>

###### Código [aqui](https://github.com/chicodiegomoreira/launchbase-04/blob/master/docs/semana01/modulo01/desafio-1-4/banking-operations.js)!

#### Saída
```
Saldo Atual: 60
----------------------------
Maior Crédito: 120
Maior Débito: 80
----------------------------
Média de Transações: 70
----------------------------
Total de Créditos: 2
Total de Débitos: 2
```

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/chicodiegomoreira/launchbase-04/blob/master/LICENSE) para mais detalhes.
