import logo from './logo.svg';
import './App.css';
import ProductItem from './components/Products/ProductItem';
import './components/Products/ProductItem.css';
import ProductList from './components/Products/ProductList';
import NewProduct from './components/Products/NewProduct';
import React, { useState, Fragment } from 'react';

const DEFAULT_PRODUCTS = [
  { id: Math.floor(Math.random() * 100), name: "Dress", category: "Fashion", price: 12 },
  { id: Math.floor(Math.random() * 100), name: "T-Shirt", category: "Fashion", price: 12 },
  { id: Math.floor(Math.random() * 100), name: "Red Dress", category: "Fashion", price: 20 },
  { id: Math.floor(Math.random() * 100), name: "iPhoneX", category: "Smartphone", price: 600 },
  { id: Math.floor(Math.random() * 100), name: "iPhone 12", category: "Smartphone", price: 1200 },
  { id: Math.floor(Math.random() * 100), name: "Smart Tivi Sony 50 Inch", category: "Smart Tivi", price: 700 },
]

// The syntax inside function App() called JSX
function App() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);

  const addProductHandler = (product) => {
    product.id = Math.floor(Math.random() * 100);
    // preProducts is the value that was originally set.
    setProducts((preProducts) => {
      return [product, ...preProducts];
    });
  }

  return (
    <Fragment>
      <h2>Getting Started with React</h2>
      <NewProduct onAddProduct={addProductHandler} />
      <ProductList products={products} />
    </Fragment>
  );
}

export default App;
