

// Declaração de Array de Objetos
const usuarios = [
    { nome: "Carlos", tecnologias: ["CSS", "HTML"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

console.log('Usuário e Tecnologias')
console.log('-------------------------------------------------------------')

// Loop para mostrar Usuário no Console
// Uso do método join(), para mostrar as tecnologias separadas por (,) e um espaço
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
for (let i = 0; i < usuarios.length; ++i) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`)
}

console.log('\n')

//Busca por Tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    const techs = usuario.tecnologias
    for (let i = 0; i < techs.length; ++i) {
        if (techs[i] === 'CSS') {
            return true;
        }
    }

    return false;
}

console.log('Busca por Tecnologias')
console.log('-------------------------------------------------------------')

// Mostrando no Console
for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}