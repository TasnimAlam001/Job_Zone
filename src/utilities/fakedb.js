// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getAppliedJobs();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = newQuantity;
        alert('You have already Applied to this company.!!');
    }
    localStorage.setItem('applied-job', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getAppliedJobs();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('applied-job', JSON.stringify(jobCart));
    }
}

const getAppliedJobs = () => {
    let jobCart = {};

    //get the job cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
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
