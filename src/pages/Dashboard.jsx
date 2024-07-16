import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <ProductList />
            <Sidebag />
        </>
    );
};

export default Dashboard;