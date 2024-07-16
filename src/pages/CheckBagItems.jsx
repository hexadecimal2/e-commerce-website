import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Bag from '../components/Bag';

const BagItems = () => {
    return (
        <div className='check'>
        {/* Siya's section */}
            <Sidebar />
            <div>Check Your Bag Items</div> 
            <Bag />
        </div>
    );
};

export default BagItems;