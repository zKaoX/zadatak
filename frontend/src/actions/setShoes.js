/**
 * Action creator for making action SET_SHOES
 * 
 * @param {Array} shoes - shoes available in store.
 * @return {Action} 
 */
function setShoes(shoes) {
    return {
        type: 'SET_SHOES',
        payload: { shoes }
    };
}

export default setShoes;