'use strict'

const numeros = [2, 5, 7, 45, 23, 80, 120, 89, 67, 56,  ];
const nomes = ['Enzao', 'Dodo', 'Pedrovs', 'Molera', 'Japo']


const randomize = function(min, max){
    min = Math.ceil(2);
    max = Math.floor(666);  
    let result = Math.floor(Math.random() * (max-min) + min);
    return result;
}

console.log(randomize());


// const numeros = [randomize()];

//Problema: eixibir os elementos do array no console log
//Solucao imperativa (while)

const ultimoIndice = numeros.length -1;
let contador = 0;

// while(contador <= ultimoIndice){
// console.log(numeros[contador])
// contador++
// }

//Solucao imperativa(FOR)
// for(contador = 0; contador <= ultimoIndice; contador++){
//     console.log(numeros[contador]); 
// }

//Solucao Declarativa(forEach)
const mostrarElementos = (numero) => console.log(numero);
numeros.forEach(mostrarElementos);

//Problema: Exibir os elementos do array no layout
// const criarItems = (item) => {
//     const ul = document.querySelector('ul');
//     const div = document.createElement('div');
//     div.classList.add('items');
//     div.textContent = item
//     ul.appendChild(div)
// }

//Problema: Exibir os elementos do array no layout
const criarContainer = (titulo, array) =>{
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.classList.add('array-container');
    div.innerHTML = `
        <h2>${titulo}</h2>
        <ul>
            <li class='items'>
                ${array.join("<li class='items'>")}
            </li>
        </ul>
    `

    main.appendChild(div)
}

criarContainer('e os guri',numeros)
criarContainer('Sala daora',nomes)

// numeros.forEach(criarItems)

