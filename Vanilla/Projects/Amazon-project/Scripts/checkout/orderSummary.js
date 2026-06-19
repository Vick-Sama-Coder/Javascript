import { cart, removeFromCart, updateDeliveryDate } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { fixCurrency } from "../Utils/money.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


const today = dayjs();



export function renderOrderSummary(){  
  renderPaymentSummary() 
    let cartSummaryHTML = '';

    console.log(today.format('DD MMMM YYYY'))

    renderCart();
    


    function renderCart(){
    cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId)



    const deliveryOptionsId = cartItem.deliveryOptionsId;

    console.log('renderizando', deliveryOptionsId)


    const deliveryOption = getDeliveryOption(deliveryOptionsId);

    const deliveryDate = today.add(deliveryOption.deliveryDay, 'days');
    const formatedDay = deliveryDate.format('dddd, MMMM D');





    cartSummaryHTML += `<div class="cart-item-container
    js-cart-item-${matchingProduct.id}
    ">
            <div class="delivery-date">
              Delivery date: ${formatedDay}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${fixCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: ${cartItem.quantity} <span class="quantity-label"></span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}"  >
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
                ${renderDeliveryOptions(matchingProduct, cartItem)}
              </div>
            </div>
          </div>`;
    });
    document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

    }

    function renderDeliveryOptions(matchingProduct, cartItem){
    let orderSum = '';

    deliveryOptions.forEach((deliveryOption) =>{
    const deliveryDate = today.add(deliveryOption.deliveryDay, 'days');
    const formatedDay = deliveryDate.format('dddd, MMMM D');
    const price = deliveryOption.priceCents === 0
      ? 'FREE '
      : `$${fixCurrency(deliveryOption.priceCents)} -`

    const isChecked = deliveryOption.id === cartItem.deliveryOptionsId
      ? 'checked' 
      : '';
      

    orderSum += `
      <div class="delivery-option js-delivery-option"
      data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}"
      >
        <input type="radio" ${isChecked}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}" data-product-id="" >
        <div>
          <div class="delivery-option-date">
            ${formatedDay}
          </div>
          <div class="delivery-option-price">
            ${price} Shipping
          </div>
        </div>
      </div>
      
      
    `
    });
    return orderSum
    }



    document.querySelectorAll('.js-delete-link')
    .forEach((button, index) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        removeFromCart(productId);
        renderPaymentSummary()

      });
    });


    document.querySelectorAll('.js-delivery-option').forEach(element =>{
      element.addEventListener('click', () =>{
        const { productId, deliveryOptionId } = element.dataset;
        updateDeliveryDate(productId, deliveryOptionId);
        renderOrderSummary()
      
      })
    })
}
