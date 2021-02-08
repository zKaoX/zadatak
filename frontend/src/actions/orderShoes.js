import axios from "axios";
import shoesOrdered from './shoesOrdered';

/**
 * Returns thunk which for given buyer orders shoes from stores cart. 
 * 
 * @param {string} url - url at which to make order.
 * @param {string} name - buyer name.
 * @param {string} email - buyer email.
 * @param {string} deliveryAdress
 * 
 * @param {function} 
 */
const orderShoes = ({url, name, email, deliveryAdress}) => async (dispatch, getState) => {
    try {
        // Make order
        const shoes = getState().shoes_in_cart;
        const orders = shoes.map(el => {
            return {
                shoe_id: el.id,
                buyer_name: name,
                delivery_adress: deliveryAdress,
                buyer_email: email
            }
        });
        const res = await axios.post(url, {orders});

        dispatch(shoesOrdered(name, email, deliveryAdress));
    } catch (e) {
        console.log('Exception from orderShoes');
        console.log(e);
    }
};

export default orderShoes;