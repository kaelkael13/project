'use strict';

let productsData = [];
let productsCards = document.querySelectorAll('.items_1');

productsCards.forEach(function (productsCard) {
    let name = productsCard.querySelector('.items_1__header').innerText;
    let desc = productsCard.querySelector('.items_1__text').innerText;
    let price = productsCard.querySelector('.itemPrice').innerText;

    productsData.push({
        name,
        desc,
        price
    });
});