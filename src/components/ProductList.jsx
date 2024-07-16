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
import '../App.css';
const ProductList = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            image: appleWatch,
            name: "Apple Watch",
            smallDescription: "Series 5 SE",
            description : 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces.',
            price: 529.99,
            rating: 4
        },
        {
            id: 2,
            image: headphones,
            name: "Sony ZX33OBT",
            smallDescription: "Light Grey",
            description : 'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones.',
            price: 39.99,
            rating: 4
        },
        {
            id: 3,
            image: iphone11Black,
            name: "iPhone 11",
            smallDescription: "Serious Black",
            description : 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life.',
            price: 619.99,
            rating: 4
        },
        {
            id: 4,
            image: iphone11Green,
            name: "iPhone 11",
            smallDescription: "Subway Blue",
            description : 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue.',
            price: 619.99,
            rating: 4
        },
        {
            id: 5,
            image: iphone11Red,
            name: "iPhone 11",
            smallDescription: "Product RED",
            description : 'Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color.',
            price: 619.99,
            rating: 4
        },
        {
            id: 6,
            image: iphone11White,
            name: "iPhone 11",
            smallDescription: "Milky White",
            description : 'The iPhone 11 in Milky White provides a clean, classic look with the power and performance you expect from Apple.',
            price: 619.99,
            rating: 4
        },
        {
            id: 7,
            image: iphone11Red,
            name: "iPhone 13",
            smallDescription: "Product RED",
            description : 'Upgrade to the iPhone 13 in Product RED for enhanced performance, stunning camera capabilities, and vibrant design.',
            price: 619.99,
            rating: 4
        },
        {
            id: 8,
            image: iphone11Red,
            name: "iPhone 14",
            smallDescription: "Product RED",
            description : 'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design.',
            price: 619.99,
        },
        {
            id: 9,
            image: dellXpsWhite,
            name: "Dell XPS 13",
            smallDescription: "White",
            description : 'The Dell XPS 13 in white offers a premium laptop experience with a stunning display, powerful performance, and sleek design.',
            price: 1799.99,
            rating: 4
        },
        {
            id: 10,
            image: iphone11Blue,
            name: "iPhone 11",
            smallDescription: "Navy Blue",
            description : 'The iPhone 11 in Navy Blue combines elegance and functionality, providing a seamless user experience with impressive features.',
            price: 729.99,
            rating: 4
        },
        {
            id: 11,
            image: macbook,
            name: "Macbook",
            smallDescription: "Macbook Air",
            description : 'The Macbook Air is the perfect blend of performance and portability, featuring a stunning Retina display and advanced technology.',
            price: 3799.99,
            rating: 5
        },
        {
            id: 12,
            image: samsungNote21,
            name: "Samsung Note 21",
            smallDescription: "Violet",
            description : 'Stay productive and creative on the go with the Samsung Note 21 in Violet, featuring a powerful S Pen and vibrant display.',
            price: 319.99,
            rating: 4
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
                    <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 mb-4 '>
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