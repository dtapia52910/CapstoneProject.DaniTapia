import React from 'react';
import "../Components/Styles/SuccessfulCheckout.css";


function SuccessfulCheckout() {
    return (
        <div className="successful-checkout-container">
            <h2 className="successful-checkout-title">Successful Checkout</h2>
            <p className="successful-checkout-message">Your order has been successfully placed!</p>
        </div>
    );
}

export default SuccessfulCheckout;