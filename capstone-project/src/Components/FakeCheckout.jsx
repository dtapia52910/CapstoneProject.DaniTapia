import React from 'react';
import {useNavigate } from 'react-router-dom';

const FakeCheckout = () => {
    const history = useNavigate();

    const handleFakeCheckout = () => {
        history('/checkout/success');
    };

    return (
        <div>
            <h2>Fake Checkout</h2>
            <button onClick={handleFakeCheckout}>Checkout</button>
        </div>
    );
};

export default FakeCheckout;
