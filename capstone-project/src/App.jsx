import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Navbar from './Components/NavBar';
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
        setCart([...cart, product]); 
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateCartItemQuantity = (productId, newQuantity) => {
        setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)));
    };

    return (
        <div className="app-container">
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <div className="content">
                    <Routes>
                        {/* Pass isLoggedIn and addToCart as props to ProductList */}
                        <Route path="/" element={<ProductList isLoggedIn={isLoggedIn} addToCart={addToCart} />} />
                        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                        {/* Pass cart, removeFromCart, and updateCartItemQuantity as props to Cart */}
                        {isLoggedIn && <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />} />}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
