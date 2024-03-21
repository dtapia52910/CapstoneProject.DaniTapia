
import { Link } from 'react-router-dom'; 
import './Styles/Cart.css'


    function Cart({ cart, removeFromCart, updateCartItemQuantity }) {
        const handleQuantityChange = (productId, e) => {
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                updateCartItemQuantity(productId, newQuantity);
            }
        };
    
        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
        return (
            <div className="cart-container">
                <h2>My Cart</h2>
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span>{item.title}</span>
                            <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e)} />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <div>Total Price: ${totalPrice.toFixed(2)}</div>
                <Link to="/successful-checkout" className="checkout-button">
                    <button>Checkout</button>
                </Link>
            </div>
        );
    }
    
    export default Cart;