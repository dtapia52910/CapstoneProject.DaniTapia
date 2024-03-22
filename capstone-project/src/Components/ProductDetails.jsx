import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import '../Components/Styles/ProductDetail.css'; 

const ProductDetail = ({ addToCart, isLoggedIn }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();

    useEffect(() => {
        setQuantity(1);
    }, [productId]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [productId]);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const { id, title, description, price, image, rating } = product;

    return (
        <div className="product-detail">
            <img src={image} alt={title} className="product-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
            
            {isLoggedIn && (
                <>
                    <label htmlFor="quantity">Quantity:</label>
                    <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                        {[...Array(10).keys()].map((index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </>
            )}
        </div>
    );
};

export default ProductDetail;