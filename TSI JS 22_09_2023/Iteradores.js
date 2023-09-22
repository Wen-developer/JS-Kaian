const hobbies = [
    {
        nome: "Assisir série."
    },
    {
        nome:  "Jogar futsal."
    },
    {
        nome: "Jogar games"
    },
    {
        nome: "Ficar agarrado com meu cachorro."
    }
];

const exibirHobbies = () => {
    hobbies.forEach((hobby)=> {
        console.log("Meu hobbie é " + hobby.nome);
    });
    }

const exibirHobbies2 = () => { 
         hobbies.map((hobby) => {
        console.log("O incrível mundo de " + hobby.nome);
    });
  
}

const exibirHobbies3 = () => {
    const hobbiesFiltrados = hobbies.filter(function(hobby) {
        return hobby.nome[0] === "A";
    });
    console.log(hobbiesFiltrados);
}

const exibirHobbies4 = () => {
   const posicao = hobbies.findIndex(function(hobby) {
        return hobby.nome === 'Jogar futsal';
    });
    console.log("Jogar futsal está na posição " + posicao);
}
    const exibirHobbies5 = () => {
const todosHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + "  " + hobby.nome; }, "");
    
    console.log("Meus hobbies, são: " + todosHobbies);
}

const exibirHobbies6 = () => {
const temVHobby = hobbies.some(function(hobby) {
    return hobby.nome[0] === 'V'; });
    
    console.log("Eu tenho um hobby que começa com V? " + temVHobby);
}

const exibirHobbies7 = () => {
const extensao = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + extensao);
}


const exibirHobbies8 = () => {
    const seteLetrasHobby = hobbies.find(function(hobby) {
        return hobby.nome.length === 7; });
        console.log("Meu primeiro hobby com 7 letras é: " + seteLetrasHobby);
}


const exibirHobbies9 = () => {
    const tresHobbies = hobbies.slice(0, 3);
     console.log("Meus três primeiros hobbies são: ", tresHobbies);
}

exibirHobbies();
exibirHobbies2();
exibirHobbies3();
exibirHobbies4();
exibirHobbies5();
exibirHobbies6();
exibirHobbies7();
exibirHobbies8();
exibirHobbies9();