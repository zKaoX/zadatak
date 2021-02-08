import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import Shoe from '../components/Shoe';
import orderShoes from '../actions/orderShoes';


/**
 * Main content of user checkout page.
 * Provide way for ordering shoes in cart.
 * 
 * @param {string} url - url of shoes store.
 * @return {ReactElement} 
 */
function UserCheckout({url}) {
    url = `${url}/api/orders`;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryAdress, setDeliveryAdress] = useState('');

    const shoes = useSelector(store => store.shoes_in_cart);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Shoes in cart: </h1>
            {shoes.map(el => {
                return ( 
                    <Shoe 
                      id={el.id}
                      name={el.name}
                      price={el.price}
                      image={el.image}
                      hideAddButton={true}
                    />
                );
            })}
            
            <label htmlFor="fname">Name:</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="fname" name="fname" />
            <br/>

            <label htmlFor="fname">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="fname" name="fname" />
            <br/>

            <label htmlFor="fname">Delivery address:</label>
            <input onChange={(e) => setDeliveryAdress(e.target.value)} value={deliveryAdress} type="text" id="fname" name="fname" />
            <br/>
            
            <button onClick={() => dispatch(orderShoes({url, name, email, deliveryAdress}))}>Order</button>
        </>
    );
}

export default UserCheckout;