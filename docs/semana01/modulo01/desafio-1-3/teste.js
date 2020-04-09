const usuarios = [{ nome: "Carlos", tecnologias: ["CSS", "HTML"] },
{ nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
{ nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(users) {
    for (let i = 0; i < users.length; i++) {
        const usuarioTrabalhaComCSS = users[i].tecnologias[1];

        if (usuarioTrabalhaComCSS === 'CSS') {
            console.log(`O usuário ${users[i].nome} trabalha com CSS`);
        } else {
            console.log(false);
        }
    }
}

checaSeUsuarioUsaCSS(usuarios);