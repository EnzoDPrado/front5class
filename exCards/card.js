"use strict"

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter`s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const cardGenerate = (array) =>{
    const main = document.querySelector('main');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <h2></h2>
    <span>${array.join("</span><span>")}</span>
    `

    main.appendChild(div)
}

cardGenerate(herois);