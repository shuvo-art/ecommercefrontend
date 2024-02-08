import React from "react"
import './ProductDisplay.css'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = React.useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img src={product.image} className="productdisplay-main-img" alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
               <h1>{product.name}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className="productdisplay-right-size-option">S</div>
                        <div className="productdisplay-right-size-option">M</div>
                        <div className="productdisplay-right-size-option">L</div>
                        <div className="productdisplay-right-size-option">XL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay