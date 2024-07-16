import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import appleWatch from '../assets/apple-watch.png';
import headphones from '../assets/headphones.png';
import iphone11Black from '../assets/iphone-11-black.png';
import iphone11Green from '../assets/iphone-11-green.png';
import iphone11Red from '../assets/iphone-11-red.png';
import iphone11White from '../assets/iphone-11-white.png';
import dellXpsWhite from '../assets/dell-xps-13-white.png';
import iphone11Blue from '../assets/iphone-12-pro-blue.png';
import macbook from '../assets/macbook.png';
import samsungNote21 from '../assets/samsung-note21.png';

const ProductList = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            image: appleWatch,
            name: "Apple Watch",
            smallDescription: "Series 5 SE",
            price: 529.99,
        },
        {
            id: 2,
            image: headphones,
            name: "Sony ZX33OBT",
            smallDescription: "Light Grey",
            price: 39.99,
        },
        {
            id: 3,
            image: iphone11Black,
            name: "iPhone 11",
            smallDescription: "Serious Black",
            price: 619.99,
        },
        {
            id: 4,
            image: iphone11Green,
            name: "iPhone 11",
            smallDescription: "Subway Blue",
            price: 619.99,
        },
        {
            id: 5,
            image: iphone11Red,
            name: "iPhone 11",
            smallDescription: "Product RED",
            price: 619.99,
        },
        {
            id: 6,
            image: iphone11White,
            name: "iPhone 11",
            smallDescription: "Milky White",
            price: 619.99,
        },
        {
            id: 7,
            image: iphone11Red,
            name: "iPhone 13",
            smallDescription: "Product RED",
            price: 619.99,
        },
        {
            id: 8,
            image: iphone11Red,
            name: "iPhone 14",
            smallDescription: "Product RED",
            price: 619.99,
        },
        {
            id: 9,
            image: dellXpsWhite,
            name: "Dell XPS 13",
            smallDescription: "White",
            price: 1799.99,
        },
        {
            id: 10,
            image: iphone11Blue,
            name: "iPhone 11",
            smallDescription: "Navy Blue",
            price: 729.99,
        },
        {
            id: 11,
            image: macbook,
            name: "Macbook",
            smallDescription: "Macbook Air",
            price: 3799.99,
        },
        {
            id: 12,
            image: samsungNote21,
            name: "Samsung Note 21",
            smallDescription: "Violet",
            price: 319.99,
        }
    ];

    const handleItemView = (product) => {
    navigate('/item-view', {state: {product} });
    };

    return (
        <>
            <div className='container'>
            <div className='row'>
                {products.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card border-none' style={ { backgroundColor: '#ededed' } } onClick={() => handleItemView(product)}>
                            <img src={product.image} alt={product.name} className="bg-white bg-rounded mx-auto d-block" height='230' width='190' />
                            <div className="card-content d-flex flex-column">
                                <div className="card-title">{product.name}</div>
                                <div className="card-description">{product.smallDescription}</div>
                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <span className="card-price">$ {product.price}</span>
                                    <button className='btn bg-dark'>
                                        <i className='bi bi-bag-plus-fill' style={ {color: 'white'} }></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default ProductList;