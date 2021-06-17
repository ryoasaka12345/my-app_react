import './ProductItem.css';

function ProductItem(props){
    // Vanilla Javascript
    const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.price)

    return(
        <div className="product-item">
            <div>{props.category}</div>
            <div className="product-item__description">
                <h3>{props.name}</h3>
                <div className="product-item__price">{price}</div>
            </div>
        </div>    
    );
}

export default ProductItem;