import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ProductList from '../components/ProductList';
import Bag from '../components/Bag';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <ProductList />
            <Bag />
        </>
    );
};

export default Dashboard;