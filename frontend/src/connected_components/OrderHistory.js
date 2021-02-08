import {useDispatch, useSelector} from 'react-redux';
import OrdersTable from '../components/OrdersTable';

/**
 * Main content of order history page.
 * Display all orders made in current session.
 * 
 * @return {ReactElement} 
 */
function OrderHistory() {
    const orders = useSelector(store => store.orders_history);
    
    return <OrdersTable orders={orders} />;
}

export default OrderHistory;