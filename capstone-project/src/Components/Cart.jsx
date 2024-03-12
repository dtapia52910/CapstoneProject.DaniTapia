import React from 'react';

function Cart({ cart, removeFromCart, updateCartItemQuantity }) {
    const handleQuantityChange = (productId, e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            updateCartItemQuantity(productId, newQuantity);
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e)} />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
