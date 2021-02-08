import {useSelector} from 'react-redux';

/**
 * Display number of shoes in cart.
 * 
 * @return {ReactElement} 
 */
function OrdersCounter() {
    const shoes = useSelector(state => state.shoes_in_cart);
    return (
        <div className={'order-counter'}>
            <p>
                Shoes in cart: {shoes.length}
            </p>
        </div>
    );
}

export default OrdersCounter;