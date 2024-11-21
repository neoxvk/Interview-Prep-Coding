const closures = () => {
    let items = [] //cart items

    return {
        //Add an item to the cart
        addItem : function(item){
            items.push(item)
            console.log(`${item} has been added to the cart successfully!`)
        },

        //Remove an item from the cart
        removeItem: function(item){
            const index = items.indexOf(item);  //Now we have the index where the item is present in the list
            if(index!== -1){
                items.splice(index, 1);
                console.log(`${item} has been removed from the cart`)
            }else{
                console.log(`${item} did not exists!`)
            }
        },

        //TO get all the items in the cart
        getCartItems : function(){
            return items;
        },

        //Clear cart
        clearCart: function(){
            items = []
            console.log("Cart is empty now!")
        }
    }

    
}

const cart = closures();
cart.addItem("US Polo Shirt")
cart.addItem("Fossil Watch")

//to get cart items
console.log(cart.getCartItems())


// TO remove cart Items

cart.removeItem("Fossil Watch");

//to get cart items
console.log(cart.getCartItems())

//clear the cart now
cart.clearCart()


//to get cart items
console.log(cart.getCartItems())

cart.addItem("Fossil Watch");

//to get cart items
console.log(cart.getCartItems());

