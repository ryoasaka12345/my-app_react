import logo from './logo.svg';
import './App.css';
import ProductItem from './components/ProductItem';
import './components/ProductItem.css'

// The syntax inside function App() called JSX
function App() {
  return (
    <div className="App">
      <h2>Getting Started with React.</h2>
      <ul>
        <ProductItem></ProductItem>
      </ul>
    </div>
  );
}

export default App;
