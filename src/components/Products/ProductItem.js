import React, { useState } from 'react';
import './ProductItem.css';

function ProductItem(props) {
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.price)

    // `useState` return an array with 2 elements, 
    // first is the value, second is a function
    const [name, setName] = useState(props.name);
    const [itemClasses, setItemsClasses] = useState('product-item');

    const titleClickHandler = () => {
        setName(name + ': clicked');
    }

    const itemClickHandler = () => {
        setItemsClasses('product-item product-item--active');
        console.log('test itemClickHandler');
    }

    return (
        <div className={itemClasses} onClick={itemClickHandler} >
            <div>{props.category}</div>
            <div className="product-item__description">
                <h3 onClick={titleClickHandler}>{name}</h3>
                <div className="product-item__price">{price}</div>
            </div>
        </div>
    );
}

export default ProductItem;
