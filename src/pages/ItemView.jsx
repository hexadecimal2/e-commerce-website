import React from 'react';
import Sidebar from '../components/Sidebar';
import Bag from '../components/Bag';

const ItemView = () => {
    return (
        <>
            {/* Joshua's section */}
            <Sidebar />
            Product details
            <Bag />
        </>
    );
};

export default ItemView;