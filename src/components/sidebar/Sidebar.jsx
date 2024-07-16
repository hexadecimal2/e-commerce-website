import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStore, faShoppingBag, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import logo from '../../assets/Logo.png';

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
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul>
        <li className={isActive('/store') ? 'active' : ''}>
          <Link to='/store'>
            <FontAwesomeIcon icon={faStore} className={isActive('/store') ? 'rotate' : ''} />
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
