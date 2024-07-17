import React from "react";
import ProductList from "../ProductList.jsx";
import {  useNavigate } from 'react-router-dom';
import "./Sidebag.css"

export let myBag = [];
let setMyBag = () => { };

function Bag() {
    const [cartItems, setCartItems] = React.useState(myBag);
    myBag = cartItems;
    setMyBag = setCartItems;
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout', { state: { cartItems } });
    };

    return (
        <div className="cart">
            <h2>Bag</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((product) => (
                        <li key={product.id} className="cart-item">
                            <img src={product.image} style={{ maxWidth: '60px' }} alt={product.title} />
                        </li>
                    ))}
                </ul>
            )}
            <h3>Bag Total: ${total.toFixed(2)}</h3>
            <button onClick={goToCheckout} style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '11px 11px', fontSize: '18px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px', stroke: 'white', fill: '#ffffff' }}>
                    <path d="M21.3117 7.94062C21.1727 7.8006 21.0073 7.68956 20.825 7.61392C20.6428 7.53829 20.4473 7.49957 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80321 21.7122 8.60826 21.637 8.42642C21.5617 8.24458 21.4512 8.07946 21.3117 7.94062ZM8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5H8.25V6.75ZM17.25 11.25C17.25 12.6424 16.6969 13.9777 15.7123 14.9623C14.7277 15.9469 13.3924 16.5 12 16.5C10.6076 16.5 9.27226 15.9469 8.28769 14.9623C7.30312 13.9777 6.75 12.6424 6.75 11.25V10.5C6.75 10.3011 6.82902 10.1103 6.96967 9.96967C7.11032 9.82902 7.30109 9.75 7.5 9.75C7.69891 9.75 7.88968 9.82902 8.03033 9.96967C8.17098 10.1103 8.25 10.3011 8.25 10.5V11.25C8.25 12.2446 8.64509 13.1984 9.34835 13.9017C10.0516 14.6049 11.0054 15 12 15C12.9946 15 13.9484 14.6049 14.6517 13.9017C15.3549 13.1984 15.75 12.2446 15.75 11.25V10.5C15.75 10.3011 15.829 10.1103 15.9697 9.96967C16.1103 9.82902 16.3011 9.75 16.5 9.75C16.6989 9.75 16.8897 9.82902 17.0303 9.96967C17.171 10.1103 17.25 10.3011 17.25 10.5V11.25Z" fill="#1A1F16" />
                </svg>
                Checkout
            </button>
        </div>
    );
}

export function addToBag(productId) {
    const product = ProductList.find(p => p.id === productId);
    const index = myBag.findIndex((item) => item.id === productId);
    if (index >= 0) {
        myBag[index].quantity++;
    } else {
        const newProduct = { ...product, quantity: 1, id: productId };
        newProduct.price = parseFloat(newProduct.price.replace('$', ''));
        myBag.push(newProduct);
    }
    setMyBag([...myBag]);
}

export function decreaseQuantity(productId) {
    setMyBag((prevBag) => {
        const updatedBag = prevBag.map((item) => {
            if (item.id === productId && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        return updatedBag.filter((item) => item.quantity > 0);
    });
};

export default Bag;
