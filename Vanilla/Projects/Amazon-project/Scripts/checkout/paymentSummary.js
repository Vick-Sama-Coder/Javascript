import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { fixCurrency } from "../Utils/money.js";


export function renderPaymentSummary(){
    let productPriceCents = 0;
    let productShipping = 0;
    let paymentSummaryHTML = '';
    

    cart.forEach(cartItem => {
        const product = getProduct(cartItem.productId);
        productPriceCents +=  product.priceCents * cartItem.quantity;
        
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId)
        productShipping += deliveryOption.priceCents
        
    });
    const totalBeforeTax = productPriceCents + productShipping;

    const taxPriceCents = totalBeforeTax * 0.1;

    const totalOrder = taxPriceCents + totalBeforeTax


        paymentSummaryHTML += `
            <div class="payment-summary js-payment-summary">
            <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Items (3):</div>
                <div class="payment-summary-money">$${fixCurrency(productPriceCents)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$${fixCurrency(productShipping)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${fixCurrency(totalBeforeTax)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${fixCurrency(taxPriceCents)}</div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${fixCurrency(totalOrder)}</div>
            </div>

            <button class="place-order-button button-primary">
                Place your order
            </button>
            </div>

        `

    


    console.log(productPriceCents)

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML
};