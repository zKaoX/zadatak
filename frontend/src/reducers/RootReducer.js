const initialState = {
    shoes: [],
    shoes_in_cart: [],
    orders_history: [],
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHOES':
            return {
                ...state,
                shoes: action.payload.shoes
            };

        case 'ADD_TO_CART':
            return {
                ...state,
                shoes_in_cart: [
                    ...state.shoes_in_cart,
                    ...action.payload.shoes
                ]
            };

        case 'SHOES_ORDERED':
            const orders = state.shoes_in_cart.map((el) => {
                return {
                    shoe_id: el.id,
                    shoe_name: el.name,
                    shoe_price: el.price,
                    buyer_name: action.payload.buyerName,
                    buyer_email: action.payload.email,
                    delivery_adress: action.payload.deliveryAdress,
                }
            });

            return {
                ...state,
                shoes_in_cart: [],
                orders_history: [
                    ...state.orders_history,
                    ...orders
                ]
            }

        default:
            return state;
    }
};

export default RootReducer;