const addToCart = id => {
    let storeCart;

    const shoppingCartStr = localStorage.getItem('shoppingCart');      // return value in string format

    if (shoppingCartStr) {
        storeCart = JSON.parse(shoppingCartStr);        // turning the existing string type object variable into json object and storing the object in storeCart
    } else {
        storeCart = {};     // empty object is assigned to storeCart
    }

    const quantity = storeCart[id];
    if (quantity) {
        storeCart[id] = parseInt(quantity) + 1;
    } else {    // not in the storage
        storeCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(storeCart));
}

const removeFromCart = (id) => {
    const storeCart = localStorage.getItem('shoppingCart');

    if (storeCart) {    // if the cart exists in the local storage
        const storeCartObj = JSON.parse(storeCart);     // parse the cart and turn it into an object
        if (id in storeCartObj) {       // if the id exists in the 
            delete storeCartObj[id];
            localStorage.setItem('shoppingCart', JSON.stringify(storeCartObj));
        }
    }
}

const removeEntireCart = () => {
    localStorage.removeItem('shoppingCart');
}

export {
    addToCart,
    removeFromCart,
    removeEntireCart
};