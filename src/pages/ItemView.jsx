import React from 'react';
import Sidebar from '../components/Sidebar';
import Bag from '../components/Bag';

const ItemView = () => {
    return (
        <>
            {/* Joshua's section */}
            <Sidebar />
            <div>Product details</div> 
            <Bag />
        </>
    );
};

export default ItemView;