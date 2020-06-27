'use strict';
{

let submit_cart = document.getElementById('submit'  );
let buy_list    = document.getElementById('buy-list');

submit_cart.addEventListener('click', () => {
  if  (document.getElementById('input').value !== '') {
    let list  = document.createElement('div'  );
    let check = document.createElement('input');
    check.type = 'checkbox';
    let p = document.createElement('p');
    p.innerText = document.getElementById('input').value;
    list.appendChild(check);
    list.appendChild(p);
    list.firstElementChild.addEventListener('change', () => {
      if (list.lastElementChild.className === 'checked') {
        list.lastElementChild.classList.remove('checked');
      } else {
        list.lastElementChild.classList.add('checked');
      }
    });
    buy_list.appendChild(list);
  }
  document.getElementById('input').value = '';
  document.getElementById('input').focus();

  });

}