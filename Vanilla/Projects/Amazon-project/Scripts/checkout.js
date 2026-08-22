import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { renderProductsGrid } from './amazon.js';
//import '../data/backend-practice.js'



async function loadPage () {

    await loadProductsFetch();
    
    renderProductsGrid();
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();
/*Promise.all([
    loadProductsFetch()
]).then(()=>{
    renderProductsGrid();
    renderOrderSummary();
    renderPaymentSummary();
})*/




