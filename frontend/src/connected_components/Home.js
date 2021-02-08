import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Shoe from '../components/Shoe';
import requestShoes from '../actions/requestShoes';
import addToCart from '../actions/addToCart';

/**
 * Main content of home page.
 * Display shoes available in store at given url.
 * 
 * @param {string} url - url of shoes store.
 * @return {ReactElement} 
 */
function Home({url}) {
    const shoes = useSelector(state => state.shoes);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestShoes(`${url}/api/shoes`));
    }, [])

    function onAddClick({id, name, price, image}) {
        dispatch(addToCart([{id, name, price, image}]))
    }


    return (
        <>
            {shoes.map(el => {
                return ( 
                    <Shoe 
                      id={el.id}
                      name={el.name}
                      price={el.price}
                      image={el.image}
                      onAddClick={onAddClick}

                      key={el.id}
                    />
                );
            })}
        </>
    );
}

export default Home;