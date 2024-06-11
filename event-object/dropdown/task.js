let list = document.getElementsByClassName('dropdown__list');
let value = document.getElementsByClassName('dropdown__value');
let item = document.getElementsByClassName('dropdown__item');

value.item(0).addEventListener(
  "click",
  () => {
    console.log('open list');
    list.item(0).classList.toggle ('dropdown__list_active');
  }
)

item.item(0).addEventListener(
  "click",
  function (event) {
    console.log('click item 1');
    event.preventDefault();
    value.item(0).textContent = 'JavaScript';
    list.item(0).classList.toggle ('dropdown__list_active');
  }
)

item.item(1).addEventListener(
  "click",
  function (event) {
    console.log('click item 2');
    event.preventDefault();
    value.item(0).textContent = 'PHP';
    list.item(0).classList.toggle ('dropdown__list_active');
  }
)

item.item(2).addEventListener(
  "click",
  function (event) {
    console.log('click item 3');
    event.preventDefault();
    value.item(0).textContent = 'Python';
    list.item(0).classList.toggle ('dropdown__list_active');
  }
)

item.item(3).addEventListener(
  "click",
  function (event) {
    console.log('click item 4');
    event.preventDefault();
    value.item(0).textContent = 'Fortran';
    list.item(0).classList.toggle ('dropdown__list_active');
  }
)
