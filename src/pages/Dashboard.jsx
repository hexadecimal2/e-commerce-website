import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ProductList from '../components/ProductList';
import SideBag from '../components/SideBag';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <ProductList />
            <SideBag />
        </>
    );
};

export default Dashboard;