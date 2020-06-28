'use strict';
{

class Cart {
  constructor(storage){
    this.storage = storage;
    this.item = document.getElementById('input'    );
    this.btn  = document.getElementById('submit'   );
    this.list = document.getElementById('buy-list' );
    this.loadStorage();
  }

  loadStorage() {
    for (let i=0; i<this.storage.length; i++){
      let check_list = new CheckList(this.storage.key(i));
      check_list.label.classList.add(this.storage.getItem(this.storage.key(i)));
      check_list.checkListening(this.storage);
      check_list.closeListening(this.storage);
      this.list.appendChild(check_list.list);
    }
  }

  event() {
    this.btn.addEventListener('click', () => {
      if (!this.item.value || this.storage.getItem(this.item.value)){
        this.item.classList.add('remark');
      } else {
        this.storage.setItem(this.item.value, 'unchecked');
        let check_list = new CheckList(this.item.value);
        check_list.checkListening(this.storage);
        check_list.closeListening(this.storage);
        this.list.appendChild(check_list.list);
        this.item.classList.remove('remark');
      }
      this.item.value = '';
      this.item.focus();
    });
  }
} //end of class Cart

class CheckList {
  constructor(text) {
    this.text = text;
    this.list = document.createElement('form'  );
    this.close = document.createElement('span');
    this.close.classList.add('fa', 'fa-trash-alt', 'close');
    this.check = document.createElement('input');
    this.check.type = 'checkbox';
    this.label = document.createElement('label');
    this.label.innerText = this.text;
    this.label.appendChild(this.check);
    this.list.appendChild(this.label);
    this.list.appendChild(this.close);
  }

  checkListening(storage) {
    this.check.addEventListener('change', () => {
      if (storage.getItem(this.text) === 'checked') {
        this.label.classList.remove('checked');
        storage.setItem(this.text, 'unchecked');
      } else {
        this.label.classList.add('checked');
        storage.setItem(this.text, 'checked');
      }
    });
  }

  closeListening(storage) {
    this.close.addEventListener('click', () => {
      this.list.remove();
      storage.removeItem(this.text);
    });
  };

  storeStorage(){

  }
} // end of class CheckList


// class strageOrganizer {
//   constructor(cart){
//   }
// } // end of class strageOrganizer


let s = localStorage;
let cart = new Cart(s);
cart.event();

}