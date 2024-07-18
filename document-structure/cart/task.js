let productQuantityValue = document.querySelectorAll('.product__quantity-value');
let productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let cartProducts = document.querySelector('.cart__products');
//let cartProduct = Array.from(document.getElementsByClassName('cart__product'));
let productAdd = Array.from(document.querySelectorAll('.product__add'));
let products = document.querySelector('.products');
let product = document.querySelectorAll('.product');
let productImage = document.querySelectorAll('.product__image');
let cartProductCount = document.getElementsByClassName('cart__product-count');

let cartsArr = [];

//  создание карточки товара в корзине
function addProduct (cartId, cartSrc, cartCount) {
  cartProducts.insertAdjacentHTML('beforeEnd',
    `<div class="cart__product" data-id="${cartId}">
        <img class="cart__product-image" src="${cartSrc}">
        <div class="cart__product-count">${cartCount}</div>
        <a href="#" class="cart__remove">&times;</a>
    </div>`                
  );
  /*cartsArr.push({
      id: cartId,
      src: cartSrc,
      count: cartCount
  }); */
}

// + - товара
productQuantityControlDec.forEach((element, index) => { 
  element.addEventListener(
  "click",  
    function () {
      if (productQuantityValue[index].textContent >= 2) {
        productQuantityValue[index].textContent = Number(productQuantityValue[index].textContent) - 1;
      } 
    });
});

productQuantityControlInc.forEach((element, index) => { 
  element.addEventListener(
  "click",  
    () => {
      productQuantityValue[index].textContent = Number(productQuantityValue[index].textContent) + 1;
    });
});
  
productAdd.forEach((element, index) => { 
  element.addEventListener(
  "click",  
    () => {
      let cartId = product[index].dataset.id;
      let cartSrc = productImage[index].src;
      let cartCount = Number(productQuantityValue[index].textContent); 

      let cart = Array.from(document.getElementsByClassName('cart__product'));
      
      let productInCard = cart.find((element) => { return element.dataset.id === cartId; });
      /*
      cart.forEach((e, i) => {
        console.log(e);
      })*/

      if(productInCard) {
        
        let p = Array.from(document.getElementsByClassName('cart__product-count'));
        console.log('p ' + p[1]);
        
        p.forEach((e) => {
          
          console.log('до' + e.textContent);
          e.textContent = Number(e.textContent) + Number(cartCount);
          console.log('после' + e.textContent);
  
        })

        console.log(productInCard.textContent);
        console.log(Number(productInCard.textContent) + Number(cartCount));
        
        productInCard = Number(p) + Number(cartCount)

      } else {
        addProduct(cartId, cartSrc, cartCount);
      }
    });
});

// удаление товара из корзины
cartProducts.addEventListener(
  'click', 
  function (e) {
    if(e.target.classList.contains('cart__remove')){
      e.target.parentElement.remove();
    }
})