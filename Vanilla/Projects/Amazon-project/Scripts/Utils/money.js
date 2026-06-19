export function fixCurrency(priceCents){
   const totalPrice =  (Math.round(priceCents) / 100).toFixed(2)
     return totalPrice
};