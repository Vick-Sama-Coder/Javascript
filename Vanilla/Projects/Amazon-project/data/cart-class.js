class Cart {
    localStorageKey = undefined;
    cart = JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
    
    constructor(localStorageKey){
        this.localStorageKey = localStorageKey
    }

    saveToStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(cart))
    }

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
        }

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
    }

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

}

const cartOop = new Cart('cart-oop')
const businessCart = new Cart('business-cart')





console.log(cartOop)
console.log(businessCart)


