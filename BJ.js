// window.addEventListener('DOMContentLoaded', function() {
    // Execute after page load
//   })

// Allow Access to card imgs 
// const app = express();
// const const express = require('express');
// path = require('path');

// const serveIndex = require('serve-index');
// app.use('/images', serveIndex(path.join(_dirname, '/images')));

// Deal button: When clicked deal player a card, dealer a card
// then player a card and dealer a card again. 
// attach an event listener to button
// appened a new img element to #dealerhand and #playerhand 
var deal = document.getElementById('deal');
var hit = document.getElementById('hit');
var stand = document.getElementById('stand');
const player = document.getElementById('playerHand');
const dealer = document.getElementById('dealerHand')

deal.addEventListener('click', event => {
    dealCards()
    console.log('you click me')
})

function dealCards() {
    let dealerOrPlayer = 'dealer';
    for (var i = 0; i < 2; i++) {
        let card = document.createElement('img');
        card.src = "/Users/corcoding/Desktop/Projects!/PRACTICE/Module3/JS/blackjack-exercise/images/king_of_spades.png";

        if (dealerOrPlayer == 'dealer') {
            dealer.appendChild(card);
        }
        else {
            player.appendChild(card);
        }

        if (i == 0) {
            dealerOrPlayer = 'player';
        }
        else if (i == 1) {
            dealerOrPlayer = 'dealer';
        }

    
}
}

// var dealCards = function() {
//     deal.getElementByTagNmae(img);
// };   
// deal.addEventListener('click', event => {
//     event.target.img = "2_of_hearts.png"
// } 
// })