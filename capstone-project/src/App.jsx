
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Navbar from './Components/NavBar'; 
import './App.css'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    return (
        <div className="app-container">
            <BrowserRouter>
                <Navbar /> 
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
