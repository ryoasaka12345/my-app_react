import logo from './logo.svg';
import './App.css';
import ProductItem from './components/Products/ProductItem';
import './components/Products/ProductItem.css';
import ProductList from './components/Products/ProductList';
import NewProduct from './components/Products/NewProduct';

// The syntax inside function App() called JSX
function App() {

  const products = [
    { name: "T-Shirt", category: "Fashion", price: 12 },
    { name: "Red Dress", category: "Fashion", price: 20 },
    { name: "iPhoneX", category: "Smartphpne", price: 600 },
    { name: "iPhone 12", category: "Fasion", price: 1200 },
    { name: "Smar Tivi Sony 59 Inch", category: "Smart Tivi", price: 700 }
  ];

  const addProductHandler = product => {
    console.log("Process to add product");
  };

  return (
    <div>
      {/* Pass the function as an argument to NewProduct.js with the name `onAddProduct` */}
      <NewProduct onAddProduct={addProductHandler}></NewProduct> 
      {/* Pass the list as an argument to ProductList.js with the name `products` */}
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
