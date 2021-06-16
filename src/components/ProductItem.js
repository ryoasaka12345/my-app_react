import './ProductItem.css';

function ProductItem(props){
/*     const category = "Fshion";
    const productName = "T-Shirt";
    const price = "$12";
    const product = [
        {name: "T-Shirt", category: "Fashion", price: 12},
        {name: "Red Dress", category: "Fashion", price: 20},
        {name: "iPhoneX", category: "Smartphpne", price: 600},
        {name: "iPhone 12", category: "Fasion", price: 1200},
        {name: "Smar Tivi Sony 59 Inch", category: "Smart Tivi", price: 700}
    ]; */

    return(
        <div className="product-item">
            <div>{props.category}</div>
            <div className="product-item__description">
                <h3>{props.name}</h3>
                <div className="product-item__price">{props.price}</div>
            </div>
        </div>    
    );
}

export default ProductItem;
