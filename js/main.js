'use strict';
{

let submit_cart = document.getElementById('submit'  );
let buy_list    = document.getElementById('buy-list');

submit_cart.addEventListener('click', () => {
  if  (document.getElementById('input').value !== '') {
    let list  = document.createElement('div'  );
    let check = document.createElement('input');
    let p     = document.createElement('p'    );
    check.type = 'checkbox';
    list.appendChild(check);
    p.innerText = document.getElementById('input').value;
    list.appendChild(p);
    buy_list.appendChild(list);
  }
  document.getElementById('input').value = '';
  document.getElementById('input').focus();

    console.log('list is added');
  });

}