//9 Shopping Cart removeItemFromCart
var cart = [];

var Item = function(nameParameter,priceParmeter,countParameter){
    this.name = nameParameter
    this.price = priceParmeter
    this.count = countParameter
};
//nameParameter,priceParmeter,countParameter
function addItemToCart(nameParameter,priceParmeter,countParameter){
    for (var i in cart){
        if (cart[i].name === nameParameter) {
            cart[i].count += countParameter;
            return;
        }
    }
    var item = new Item(nameParameter,priceParmeter,countParameter);
    cart.push(item);
}

//Removes part of item, ex) if there are 3 apples then remove only one apple
function removeItemFromCart(nameParameter){
    for (var i in cart){
        if (cart[i].name === nameParameter){
            cart[i].count -=1;
            if (cart[i].count === 0) {
                cart.splice(i,1);
            }
            break; 
        }
    }
}

//Remove whole particular item
function removeItemFromCartAll(nameParameter){
    for (var i in cart){
        if(cart[i].name = nameParameter){
            cart.splice(i,1);
            break;
        }
    }
}

addItemToCart('Pear',1.75,1);
addItemToCart('Apple',1.50,3);
addItemToCart('Apple',1.50,1);
addItemToCart('Apple',1.50,1);
addItemToCart('Banana',2.50,1);
addItemToCart('WaterMelon',5.50,1);

console.log(cart.length);
console.log(cart);

removeItemFromCartAll('Banana');

console.log(cart.length);
console.log(cart);

//Don't remove the item from cart but just clear
function clearCart(){

}
//return total number of cart
function countCart(){

}
//return total amount of cost of cart
function totalCart(){

}
//display array of Item into HTML
function listCart(){

}
//save the cart evenif they are not actually buying
function saveCart(){

}
//
function loadCart(){

}
