let items = document.getElementById('items');
let imgLoad = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function addCurrency(code, value) {
  items.insertAdjacentHTML('beforeEnd', 
    `<div class="item">
      <div class="item__code">${code}</div>
      <div class="item__value">${value}</div>
      <div class="item__currency">руб.</div>
    </div>`
  )
}

xhr.onload = function() {
  if (xhr.status != 200) {
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else {    
    imgLoad.classList.remove('loader_active');
    
    let data = JSON.parse(xhr.response);        
    for (let key in data.response.Valute) {
      addCurrency(data.response.Valute[key].CharCode, data.response.Valute[key].Value);
    }
  }
};