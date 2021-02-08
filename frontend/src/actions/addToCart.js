/**
 * Action creator for making action ADD_TO_CART
 * 
 * @param {Array} shoes - array of shoes to be added to cart.
 * @return {Action} 
 */
function addToCart(shoes) {
    return {
        type: 'ADD_TO_CART',
        payload: { shoes }
    };
}

export default addToCart;