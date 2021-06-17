import logo from './logo.svg';
import './App.css';
import ProductItem from './components/Products/ProductItem';
import './components/Products/ProductItem.css'
import ProductList from './components/Products/ProductList';

// The syntax inside function App() called JSX
function App() {

  const products = [
    { name: "T-Shirt", category: "Fashion", price: 12 },
    { name: "Red Dress", category: "Fashion", price: 20 },
    { name: "iPhoneX", category: "Smartphpne", price: 600 },
    { name: "iPhone 12", category: "Fasion", price: 1200 },
    { name: "Smar Tivi Sony 59 Inch", category: "Smart Tivi", price: 700 }
  ];

  return (
    <div>
      <h2>Getting Started with React.</h2>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
