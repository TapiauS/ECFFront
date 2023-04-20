// import React from 'react';
// import Card from "./components/card.js";

const carddisplayer=document.querySelector("#gamedisplayer");
const offcanva=document.querySelector('#gameinfo')


const cardgenerator=(game)=>{
    // const card=<Card title={game.title} year={game.year} image={game.image} designer={game.designer} genre={game.genre} players={game.players} info={game.info}/>
    

    carddisplayer.insertAdjacentHTML( 'beforeend',
    `<div class="col-6 col-md-3 mt-5">
        <div class="card" style="width: 18rem; id="${game.title}">
            <img src="${game.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text"></p>
                <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#gameinfo" role="button">
                     Plus d'info
                </a>
            </div>
        </div>
    </div>`);
    const card=carddisplayer.lastElementChild;
    const cardbutton=card.querySelector('a');
    cardbutton.addEventListener("click",()=>{
        offcanva.innerHTML=                
        `<div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">${game.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12 col-md-6">
                    <p> Date de sortie :<br> ${game.year}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Genre :<br> ${game.genre}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Auteur :<br> ${game.designer}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Nombre de joueur :<br> ${game.players}</p>
                </div>
                <div class="col-12">
                    <img src="${game.image}" alt="...">
                </div>
                <div class="col-12">
                    <p>${game.info}</p>
                </div>
            </div>
        </div>`
    });
};

fetch("https://api.npoint.io/33fe536f3a3bc2f018fb").
    then(result=>result.json()).
    then(json=>{
        for (let index = 0; index < json.games.length; index++) {
            const game = json.games[index];
            cardgenerator(game,index);
        }
    });

