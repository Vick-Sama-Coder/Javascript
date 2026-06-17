import { deliveryOptions } from "./deliveryOptions.js";
let matchedItem;

export const cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item 
            
        }
    });
    if(matchingItem){
        matchingItem.quantity += 1
    }else{
        deliveryOptions.forEach((item, index) => {
            cart.push({
            productId,
            quantity: 1,
            deliveryOptionsId: item.id
        });
        })

    };
    saveToStorage();
}

export function removeFromCart(productId){
          cart.forEach((item, index) => {
        if(productId === item.productId){
            matchedItem = item
            console.log(matchedItem)
        }
        if(matchedItem){
          cart.splice(index, 1)
          document.querySelector(`.js-cart-item-${productId}`).remove()
        }
        console.log(cart)
      });

      saveToStorage();
}