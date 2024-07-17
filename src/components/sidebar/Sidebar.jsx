import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStore, faShoppingBag, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
    <Link to='/' className='brand'>
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='logo'>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.4874 1L9.76744 0.999999L8.24165 8.93076H7.24165L8.88014 0.414182H8.88119L8.95741 0.0180054L22.6737 0.0180083L22.5975 0.414182H22.6001L20.9616 8.93076H19.9616L21.4874 1Z" fill="#105E46"/>
      <rect width="18.5019" height="22.2023" transform="matrix(1 0 -0.188924 0.981992 5.49811 9.66516)" fill="#12805D"/>
      <rect width="18.5019" height="22.2023" transform="matrix(1 0 -0.188924 0.981992 4.19452 8.50879)" fill="#02D693"/>
    </svg>
  </Link>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to='/'>
            <FontAwesomeIcon icon={faStore} className={isActive('/') ? 'rotate' : ''} />
            {isOpen && <span>Store</span>}
          </Link>
        </li>
        <li className={isActive('/bag-items') ? 'active' : ''}>
          <Link to='/bag-items'>
            <FontAwesomeIcon icon={faShoppingBag} className={isActive('/bag-items') ? 'rotate' : ''} />
            {isOpen && <span>Bag</span>}
          </Link>
        </li>
        <li className='bottom'>
          <Link to='/' className='bottom-dm2'>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {isOpen && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
