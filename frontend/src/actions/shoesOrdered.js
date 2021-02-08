/**
 * Action creator for making action SHOES_ORDERED.
 * Shoes are ordered by given buyer.
 * 
 * @param {string} buyerName
 * @param {string} buyerEmail
 * @param {string} deliveryAdress 
 * 
 * @return {Action} 
 */
function shoesOrdered(buyerName, email, deliveryAdress) {
    return {
        type: 'SHOES_ORDERED',
        payload: {buyerName, email, deliveryAdress}
    };
}

export default shoesOrdered