import logo from './logo.svg';
import './App.css';
import ProductItem from './components/ProductItem';
import './components/ProductItem.css'

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
    <div className="App">
      <h2>Getting Started with React.</h2>
      <ProductItem
        name={products[0].name}
        price={products[0].price}
        category={products[0].category}
      ></ProductItem>
      <ProductItem
        name={products[1].name}
        price={products[1].price}
        category={products[1].category}
      ></ProductItem>
      <ProductItem
        name={products[2].name}
        price={products[2].price}
        category={products[2].category}
      ></ProductItem>
      <ProductItem
        name={products[3].name}
        price={products[3].price}
        category={products[3].category}
      ></ProductItem>
      <ProductItem
        name={products[4].name}
        price={products[4].price}
        category={products[4].category}
      ></ProductItem>
    </div>
  );
}

export default App;
