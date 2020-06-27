'use strict';
{

let submit_cart = document.getElementById('submit'  );
let buy_list    = document.getElementById('buy-list');

submit_cart.addEventListener('click', () => {
  if  (document.getElementById('input').value !== '') {
    let list  = document.createElement('div'  );

    let check = document.createElement('input');
    check.type = 'checkbox';

    let label = document.createElement('label');
    label.innerText = document.getElementById('input').value;
    label.appendChild(check);

    label.firstElementChild.addEventListener('change', () => {
      if (label.className === 'checked') {
        label.classList.remove('checked');
      } else {
        label.classList.add('checked');
      }
    });

    list.appendChild(label);
    buy_list.appendChild(list);
  }
  document.getElementById('input').value = '';
  document.getElementById('input').focus();

  });

}