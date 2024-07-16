import React from 'react';
import Sidebar from '../components/Sidebar';
import Bag from '../components/Bag';

const BagItems = () => {
    return (
        <>
        {/* Siya's section */}
            <Sidebar />
            Check Your Bag Items
            <Bag />
        </>
    );
};

export default BagItems;