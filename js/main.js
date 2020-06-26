'use strict';
{

let submit_cart = document.getElementById('submit');
let buy_list = document.getElementById('buy-list');

submit_cart.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerText = document.getElementById('input').value;
  buy_list.appendChild(li);
  document.getElementById('input').value = null;
  document.getElementById('input').focus();
});

}