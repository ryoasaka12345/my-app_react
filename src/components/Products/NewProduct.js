import React, { useState } from 'react';
import './NewProduct.css';

const NewProduct = () => {
    // Define states for user input data
    //     The first argument in [] is the name of the box, 
    //     and the second is the function used to put the value into the box.
    const [inputedName, setInputedName] = useState('');
    const [inputedPrice, setInputedPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Define handle functions for form events.
    // e: event
    // vanila javascript: function OnChange() {code here}
    const nameChangeHandler = (e) => {
        setInputedName(e.target.value); // Put `e.target.value` into the box named `inputedName`
    }
    const priceChangeHandler = (e) => {
        setInputedPrice(e.target.value);
    }
    const categoryChangeHandler = (e) => {
        setSelectedCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(inputedName, inputedPrice, selectedCategory);

        // reset form to empty

        setInputedName('');
        setInputedPrice('');
        setSelectedCategory('');
    }

    return (
        <div className='new-product'>
            <form onSubmit={submitHandler}>
                <div className='new-product__controls'>
                    <div className='new-product__control'>
                        <label>name</label>
                        <input
                            onChange={nameChangeHandler} // vanila javascript: onChange="nameChangeHandler"
                            value={inputedName}
                            type='text'
                            placeholder="Product name"
                        />
                    </div>
                    <div className='new-product__control'>
                        <label>Price</label>
                        <input
                            onChange={priceChangeHandler}
                            value={inputedPrice}
                            type='number'
                            placeholder="Product price"
                        />
                    </div>
                    <div className='new-product__control'>
                        <label>category</label>
                        <select
                            value={selectedCategory}
                            onChange={categoryChangeHandler}>
                            <option value="Fashion">Fashion</option>
                            <option value="Smart Phone">Smartphone</option>
                            <option value="Fashion">Smart Tivi</option>
                        </select>
                    </div>
                </div>
                <div className='new-product__actions'>
                    <button type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default NewProduct;
