// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getAppliedJobs();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = newQuantity;
        alert('You have already Applied to this company.!!');
    }
    localStorage.setItem('applied-job', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getAppliedJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('applied-job', JSON.stringify(shoppingCart));
    }
}

const getAppliedJobs = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs as getAppliedJobs,
    deleteShoppingCart
}
