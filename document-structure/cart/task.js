let productQuantityValue = document.querySelectorAll('.product__quantity-value');
let productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let cartProducts = document.querySelector('.cart__products');
let cartProduct; /*= Array.from(document.getElementsByClassName('cart__product'));*/
let productAdd = Array.from(document.querySelectorAll('.product__add'));
let products = document.querySelector('.products');
let product = document.querySelectorAll('.product');
let productImage = document.querySelectorAll('.product__image');
let cartProductCount; /*= document.getElementsByClassName('cart__product-count');*/

let cartId;
let cartSrc;
let cartCount;

//  создание карточки товара в корзине
function addProduct (cartId, cartSrc, cartCount) {
  cartProducts.insertAdjacentHTML('beforeEnd',
    `<div class="cart__product" data-id="${cartId}">
        <img class="cart__product-image" src="${cartSrc}">
        <div class="cart__product-count">${cartCount}</div>
        <a href="#" class="cart__remove">&times;</a>
    </div>`
  );
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

// кнопка добавить
/*productAdd.forEach((element, index) => { 
  element.addEventListener(
  "click",  
    () => {
      cartId = product[index].dataset.id;
      cartSrc = productImage[index].src;
      cartCount = Number(productQuantityValue[index].textContent); 
      addProduct(cartId, cartSrc, cartCount);
      dublicateRemove(cartId, cartCount);
    });
});*/


productAdd.forEach((element, index) => { 
  element.addEventListener(
  "click",  
    () => {
      cartProduct = Array.from(document.getElementsByClassName('cart__product'));
      cartProductCount = Array.from(document.getElementsByClassName('cart__product-count'));      

      cartId = product[index].dataset.id;
      cartSrc = productImage[index].src;
      cartCount = Number(productQuantityValue[index].textContent); 
      // const productInCard = cartProduct.find((elem) => { elem.dataset.id === cartId });
      const productInCard = [...cartProducts.children].find((elem) => { elem.dataset.id === cartId });
      
      if(productInCard) {
        console.log('увеличивать количество у productInCard');        
        console.log('cartProductCount.textConten ' + cartProductCount.textContent);
      } else {
        console.log('добавлять новый элемент продукта'); 
        console.log('productInCard ' + productInCard);
        console.log('cart__product-count ' + cartProductCount); 
        
        addProduct(cartId, cartSrc, cartCount);
      } 

      console.log('cartProducts.children id ' + cartProducts.children[index].dataset.id);
      console.log('cartProducts.children innerText ' + cartProducts.children[index].innerText);
      console.log('cartProducts.children length ' + cartProducts.children.length);
      console.log(cartProduct[0].textContent);
      console.log(cartProduct[1].textContent);
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