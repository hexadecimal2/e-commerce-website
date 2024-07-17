import React from 'react';
import { myBag } from '../components/Sidebag'; 
import Sidebar from '../components/sidebar/Sidebar';
import Bag from '../components/Bag';
import Rating from '../components/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';

function BagItems() {
    const [cartItems, setCartItems] = React.useState(myBag);

    React.useEffect(() => {
        setCartItems(myBag);
    }, [myBag]);

    return (
        <div className="bag-items-page">
        <div className='navbar'>
            <Sidebar/>
        </div>
            <h1>Check your Bag Items</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="bag-items-list">
                    {cartItems.map((product) => (
                        <li key={product.id} className="bag-item">
                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div class="col p-4 d-flex flex-column position-static">
                                            <img src={product.image} style={{ maxWidth: '60px' }} alt={product.title} />
                                        </div>
                                        <div class="col-auto d-none d-lg-block">
                                            <h2>{product.name}</h2>
                                            <small>{product.smallDescription}</small>
                                            <p>{product.description}</p>
                                            <h3><Rating stars={product.rating}/> <span> {product.rating} / 5 </span> </h3>
                                            <p>${product.price.toFixed(2)}</p>            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className='bagComp' style={{position: 'fixed', display: 'flex', justifyContent: 'flex-end', right: '0', top: '0'}}>
                <Bag/>
            </div>
        </div>
    );
}

export default BagItems;


