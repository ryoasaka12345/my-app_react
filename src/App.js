import logo from './logo.svg';
import './App.css';
import ProductItem from './components/Products/ProductItem';
import './components/Products/ProductItem.css';
import ProductList from './components/Products/ProductList';
import NewProduct from './components/Products/NewProduct';
import React, {useState} from 'react';

const DEFAULT_PRODUCTS = [
  { name: "Dress", category: "Fashion", price: 12 },
  { name: "T-Shirt", category: "Fashion", price: 12 },
  { name: "Red Dress", category: "Fashion", price: 20 },
  { name: "iPhoneX", category: "Smartphone", price: 600 },
  { name: "iPhone 12", category: "Smartphone", price: 1200 },
  { name: "Smart Tivi Sony 50 Inch", category: "Smart Tivi", price: 700 }
];

// The syntax inside function App() called JSX
function App() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      return [product, ...prevProducts];
    });
  };

  return (
    <div>
      <NewProduct onAddProduct={addProductHandler} />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
