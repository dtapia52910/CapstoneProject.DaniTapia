import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import SuccessfulCheckout from './Components/SuccessfulCheckout';
import ProductDetail from './Components/ProductDetails';
import backgroundImage from '../src/assets/background.jpg'; // Import the background image

import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const addToCart = (product) => {
        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            // If the product is already in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCart(updatedCart);
        } else {
            // If the product is not in the cart, add it
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateCartItemQuantity = (productId, newQuantity) => {
        setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)));
    };

    return (
        <div className="app-container">
            <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }} />
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProductList isLoggedIn={isLoggedIn} addToCart={addToCart} />} />
                        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                        {isLoggedIn && <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />} />}
                        <Route path="/successful-checkout" element={<SuccessfulCheckout />} />
                        <Route
                            path="/product/:productId"
                            element={<ProductDetail addToCart={addToCart} />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
