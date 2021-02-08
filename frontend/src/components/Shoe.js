import React from 'react';

/**
 * Show given shoe and optionaly display clickable add button.
 * 
 * @param {integer} id - shoe id
 * @param {string} name - shoe name
 * @param {number} price - shoe price
 * @param {string} image  - link to shoe image
 * @param {boolean} hideAddButton - true means do not show add button, false mean show it.
 * @param {function} onAddClick -  function which is called when add button is clicked,
 *                                 it gets id, name, price and image as inputs.
 * 
 * @return {ReactElement} 
 */
function Shoe({id, name, price, image, hideAddButton, onAddClick}) {
    return (
        <div className={'shoe'}>
            <div>
                <img  src={image} alt={`${name} shoe`} />
            </div>
            <div style={{margin: '10px 5px'}}>
                <p style={{ color: "white", textDecoration: "none"}}>Name: {name}</p>
                <p style={{ color: "white", textDecoration: "none"}}>Price: {price}</p>

                {!hideAddButton  &&
                    <button 
                      style={{margin: "10px 0"}}
                      onClick={() => onAddClick({id, name, price, image})}
                    >
                        Add
                    </button>
                }
    
            </div>
        </div>
    );
}

export default Shoe;