import './ProductList.css';
import ProductItem from './ProductItem';
import List from '../UI/Lists';

function ProductList(props) {
    return (
        <List>
            {/* like `foreach($products as $product)  */}
            {props.products.map(product => (
                <ProductItem
                    name={product.name}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </List>
    );
}

export default ProductList;
