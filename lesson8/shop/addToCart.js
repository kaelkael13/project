'use strict';

let productsData = [];
let productsCards = document.querySelectorAll('.items_1');
let itemsCounter = document.getElementById('itemsCounter');
let cart = document.querySelector('.popupCart');

// productsCards.forEach(function (productsCard) {
let nameItem;
let desc;
let price;

// productsData.push({
//     name,
//     desc,
//     price
// });
// });

productsCards.forEach(function (productsCard) {
    productsCard.querySelector('button').addEventListener('click', function (event) {
        ++itemsCounter.innerText;
        let currentItem = event.target.parentNode.parentNode.parentNode;
        nameItem = currentItem.querySelector('.items_1__header').innerText;
        desc = currentItem.querySelector('.items_1__text').innerText;
        price = currentItem.querySelector('.itemPrice').innerText;
        cart.insertAdjacentHTML('beforeend', addItemList())
    })
});


function addItemList() {
    return `
    <p>${nameItem}</p>
    <p>${desc}</p>
    <p>${price}</p>
    <p>total</p>
    `
}

