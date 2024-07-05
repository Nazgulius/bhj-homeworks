let productQuantityValue = document.querySelectorAll('.product__quantity-value');
let productQuantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
let productQuantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
let cartProducts = document.querySelector('.cart__products');
let cartProduct = document.querySelectorAll('.cart__product');
let productAdd = document.querySelectorAll('.product__add');
let products = document.querySelector('.products');
let product = document.querySelectorAll('.product');
let productImage = document.querySelectorAll('.product__image');


let cartId = 0;
let cartSrc = '';
let cartCount = 0;

//  создание карточки товара в корзине
function addProduct (cartId, cartSrc, cartCount) {
  cartProducts.insertAdjacentHTML('beforeEnd',
    `<div class="cart__product" data-id="${cartId}">
        <img class="cart__product-image" src="${cartSrc}">
        <div class="cart__product-count">${cartCount}</div>
        <a href="#" class="cart__remove">&times;</a>
  </div>`);
}

// проверка на дублирующие товары. сложение в первый и удаление дублирующего
/* function dublicateRemove(cartId, cartCount) {
  for(let i = 0; i < cartProduct.length; i++){
    

    if(cartProduct.item(i).dataset.id == cartId){
     
      cartProduct.item(i).setAtribute('data-count', Number(cartProduct.item(i).dataset.count) + Number(cartCount));
  cartProduct.lastChild.remove();
    }        
  }
}*/

// икра минтая
productQuantityControlDec.item(0).addEventListener(
  'click',
  function () { 
    if (productQuantityValue.item(0).textContent >= 2) {
      productQuantityValue.item(0).textContent = Number(productQuantityValue.item(0).textContent) - 1;
    }    
  }  
);

productQuantityControlInc.item(0).addEventListener(
  'click',
  () => {
    productQuantityValue.item(0).textContent = Number(productQuantityValue.item(0).textContent) + 1;
  }
);

// повар взрослый
productQuantityControlDec.item(1).addEventListener(
  'click',
  function () { 
    if (productQuantityValue.item(1).textContent >= 2) {
      productQuantityValue.item(1).textContent = Number(productQuantityValue.item(0).textContent) - 1;
    }    
  }  
);

productQuantityControlInc.item(1).addEventListener(
  'click',
  () => {
    productQuantityValue.item(1).textContent = Number(productQuantityValue.item(1).textContent) + 1;
  }
);

// щука
productQuantityControlDec.item(2).addEventListener(
  'click',
  function () { 
    if (productQuantityValue.item(2).textContent >= 2) {
      productQuantityValue.item(2).textContent = Number(productQuantityValue.item(2).textContent) - 1;
    }    
  }  
);

productQuantityControlInc.item(2).addEventListener(
  'click',
  () => {
    productQuantityValue.item(2).textContent = Number(productQuantityValue.item(2).textContent) + 1;
  }
);

// краб
productQuantityControlDec.item(3).addEventListener(
  'click',
  function () { 
    if (productQuantityValue.item(3).textContent >= 2) {
      productQuantityValue.item(3).textContent = Number(productQuantityValue.item(3).textContent) - 1;
    }    
  }  
);

productQuantityControlInc.item(3).addEventListener(
  'click',
  () => {
    productQuantityValue.item(3).textContent = Number(productQuantityValue.item(3).textContent) + 1;
  }
);


productAdd.item(0).addEventListener(
  'click',
  () => {  
    cartId = product.item(0).dataset.id;
    cartSrc = productImage.item(0).src;
    cartCount = Number(productQuantityValue.item(0).textContent); 
    addProduct(cartId, cartSrc, cartCount);
    
    
    Array.from(cartProducts.children).map(child => {
      if (child.dataset.id === product.item(0).dataset.id) {
        child.lastChild.textContent = productQuantityValue.item[0].textContent;
      } else {
        addProduct(cartId, cartSrc, cartCount);
      }
    })
  }
);


    // dublicateRemove(cartId, cartCount);    
    
    //console.log(cartProducts.childNodes[cartProducts.childNodes.length - 1]);
    //console.log(cartProducts.lastChild);        
    /*
    for(let i = 0; i < cartProduct.length; i++){
      console.log('Это продукт ' + cartProduct.item(i).dataset);
      console.log(cartProduct.item(i).dataset);
      console.log(cartId);
      console.log(cartProducts.childNodes[i]);

      if(cartProduct.item(i).dataset.id == cartId){       
        cartProduct.item(i).setAtribute('data-count', Number(cartProduct.item(i).dataset.count) + Number(cartCount));
    cartProduct.lastChild.remove();
      }  }  */    
    
 


productAdd.item(1).addEventListener(
  'click',
  () => {  
    cartId = product.item(1).dataset.id;
    cartSrc = productImage.item(1).src;
    cartCount = Number(productQuantityValue.item(1).textContent); 
    addProduct(cartId, cartSrc, cartCount);
    dublicateRemove(cartId, cartCount);
  }
);

productAdd.item(2).addEventListener(
  'click',
  () => {  
    cartId = product.item(2).dataset.id;
    cartSrc = productImage.item(2).src;
    cartCount = Number(productQuantityValue.item(2).textContent); 
    addProduct(cartId, cartSrc, cartCount);
    dublicateRemove(cartId, cartCount);
  }
);

productAdd.item(3).addEventListener(
  'click',
  () => {  
    cartId = product.item(3).dataset.id;
    cartSrc = productImage.item(3).src;
    cartCount = Number(productQuantityValue.item(3).textContent); 
    addProduct(cartId, cartSrc, cartCount);
    dublicateRemove(cartId, cartCount);
  }
);

// удаление товара из корзины
cartProducts.addEventListener(
  'click', 
  function (e) {
    if(e.target.classList.contains('cart__remove')){
      e.target.parentElement.remove();
    }
})