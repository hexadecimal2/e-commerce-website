import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Bag from '../components/Bag';

const BagItems = () => {
    return (
        <>
        {/* Siya's section */}
            <Sidebar />
            <div>Check Your Bag Items</div> 
            <Bag />
        </>
    );
};

export default BagItems;