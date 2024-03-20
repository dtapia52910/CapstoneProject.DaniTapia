import React, { useState } from 'react';
import '../Components/Styles/ProductCard.css';
import './ProductDetails'
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart, isLoggedIn }) {
    const { id, title, description, price, image, rating } = product;
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        onAddToCart({ ...product, quantity });
        setQuantity(1); // Reset quantity after adding to cart
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
            {isLoggedIn && (
                <>
                    <input type="number" value={quantity} onChange={handleQuantityChange} />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </>
            )}
            <Link to={`/product/${id}`}>View Details</Link>
        </div>
    );
}

export default ProductCard;
