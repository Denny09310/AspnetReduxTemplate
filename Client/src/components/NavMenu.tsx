import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavMenu.css';
import logo192 from '../assets/logo192.png';

const NavMenu: React.FC = () => {
  const navLinks = (
    <ul
      className='flex flex-col sm:mt-4 md:flex-row md:space-x-8 
                   md:mt-0 md:text-sm md:font-medium'
    >
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 text-gray-700 
             rounded md:bg-transparent md:p-0 dark:text-white ${
               isActive && 'text-blue-500'
             }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/counter'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 text-gray-700 
          rounded md:bg-transparent md:p-0 dark:text-white ${
            isActive && 'text-blue-500'
          }`
          }
        >
          Counter
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/fetch-data'
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 text-gray-700 
            rounded md:bg-transparent md:p-0 dark:text-white ${
              isActive && 'text-blue-500'
            }`
          }
        >
          Fetch Data
        </NavLink>
      </li>
      <li>
        
      </li>
    </ul>
  );

  return (
    <header>
      <nav
        className='bg-white border-gray-200 px-2 sm:px-4 
                     py-2.5 rounded dark:bg-gray-800'
      >
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <Link to='/' className='flex'>
            <img src={logo192} alt='application logo' className='h-10 w-10' />
            <span
              className='self-center text-lg font-semibold
                         ml-1 whitespace-nowrap dark:text-white'
            >
              MyReduxTemplate
            </span>
          </Link>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <FaBars className='w-6 h-6' />
            <FaTimes className='hidden w-6 h-6' />
          </button>
          <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
            {navLinks}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
