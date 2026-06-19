function Cart(localStorageKey){
    const cart = {
        cart: JSON.parse(localStorage.getItem(localStorageKey)) || [],
        saveToStorage(){
        localStorage.setItem(localStorageKey, JSON.stringify(cart))
        },
        addToCart(productId){
        let matchingItem;

        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item 
                
            }
        });
        if(matchingItem){
            matchingItem.quantity += 1
        }else{
                cart.push({
                productId,
                quantity: 1,
                deliveryOptionsId: '1'
            });

        };
        cart.saveToStorage();
        },
        removeFromCart(productId){
        let matchedItem;
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

        cart.saveToStorage();
        },
        updateDeliveryDate(productId, deliveryOptionId){
        let matchingItem;

        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item 
                
            }
        
        });
        
        matchingItem.deliveryOptionsId = deliveryOptionId;
        cart.saveToStorage()
        //console.log(matchingItem.deliveryOptionsId)
        //console.log(cart)
        

        }
    };

    return cart
}

const cartOop = Cart('cart-oop')
const businessCart = Cart('business-cart')
console.log(cartOop)
console.log(businessCart)


