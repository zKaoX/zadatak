import React from 'react';

/**
 * Show given orders
 * 
 * @param {Array} orders - array where each element has keys shoe_name, shoe_price,
 *                         buyer_name, delivery_adress and buyer_email
 * @return {ReactElement} 
 */
function OrdersTable({orders}) {
    return (
        <table className={'orders-table'}>  
            <thead>
                <tr>
                    <th>Shoe</th>
                    <th>Price</th>
                    <th>Buyer name</th>
                    <th>Delivery adress</th>
                    <th>Buyer email</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(el => {
                    return (
                        <tr>
                            <td>{el.shoe_name}</td>
                            <td>{el.shoe_price}</td>
                            <td>{el.buyer_name}</td>
                            <td>{el.delivery_adress}</td>
                            <td>{el.buyer_email}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default OrdersTable;