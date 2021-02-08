import axios from "axios";

import setShoes from './setShoes';

/**
 * Returns thunk for fetching shoes from url and seting returned tasks as new shoes in state.
 * 
 * @param {string} url
 * 
 * @return {function}
 */
const getShoes = (url) => async dispatch => {
    try {
        const res = await axios.get(url)

        dispatch(setShoes(res.data))
    } catch (e) {
        console.log('Exception from getShoes');
        console.log(e);
    }
};

export default getShoes;