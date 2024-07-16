import React from 'react';
import Sidebar from '../components/Sidebar';
import Bag from '../components/Bag';
import { useLocation, Link } from 'react-router-dom';
import '../pages/ItemView.css'
import Rating from '../components/Rating'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemView = () => {
    
    const data = useLocation().state.product;
    console.log(data);

    return (
        <>
            {/* Joshua's section */}
                <div className='container'>   
                    <div className='row'>
                        <div className='col-2'>
                         <Sidebar />
                         </div>
                            
                         <div className='col-8'>

                            <div className='container'>
                                
                                <div className='row'>
                                
                                    <Link to='/'> <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 1.25L1.625 8L8.375 14.75" stroke="#1A1F16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    {' '} Back </Link>
                                    
                                    <div className='contentTop'>
                                        
                                        
                                        <div className='smallImgs'>
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>                   
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>
                                        
                                        </div>

                                        <div className='bigImg'>
                                            <img src={data.image} alt={data.name} />
                                        </div>

                                        <div className='details'>
                                            <h1> {data.name} </h1>
                                            <h2> {data.smallDescription}</h2>
                                            <h3><Rating stars={data.rating}/> <span> {data.rating} / 5 </span> </h3>
                                            <h4> ${data.price} </h4>
                                            <p> <strong>{data.description} </strong></p>

                                            <div className='button'>
                                            <button type='button'> Add to Bag </button>
                                            </div>


                                        </div>
                                    
                                     

                                    </div>
                                        
                                    
                                    
                                    <div className='contentBottom'>
                                        
                                        <hr />
                                        
                                        <div className='description'>
                                            <h2> Description </h2>
                                            <hr />
                                            <p> {data.description} </p>
                                        </div>

                                    </div> 
                                    
                                </div>
                                
                            </div>
                        
                            </div>

                            <div className='col-2'>
                            <Bag />
                            </div>
                    
                    </div>
                </div>
        </>
    );
};

export default ItemView;