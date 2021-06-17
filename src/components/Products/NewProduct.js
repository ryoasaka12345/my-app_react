import React from 'react';
import './NewProduct.css';

const NewProduct = () => {
    return (
        <div className='new-product'>
            <form>
                <div className='new-product__controls'>
                    <div className='new-product__control'>
                        <label>name</label>
                        <input type='text' placeholder="Product name" />
                    </div>
                    <div className='new-product__control'>
                        <label>Price</label>
                        <input type='number' placeholder="Product price" />
                    </div>
                    <div className='new-product__control'>
                        <label>category</label>
                        <select>
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
