import React from 'react';
import OrderSummary from '../components/OrderSummary';
 

const Checkout = () => {
    return (
        <>
        {/* Neos section */}
        {/* Take information from shipping address user input */}
        {/* Take information from add payment user input */}
        <div>Review Your Bag Section</div> 
        <OrderSummary />
        </>
    );
};

export default Checkout;