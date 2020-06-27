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
    list.appendChild(check);
    list.appendChild(label);
    list.firstElementChild.addEventListener('change', () => {
      // let check_judge = list.lastElementChild.classList;
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