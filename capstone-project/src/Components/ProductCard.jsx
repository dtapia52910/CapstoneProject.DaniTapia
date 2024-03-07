
import React from 'react';
import "../Components/Styles/ProductCard.css"; 

function ProductCard({ product, onAddToCart }) {
    const { title, description, price, image, rating } = product;

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <div className="product-card"> 
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
