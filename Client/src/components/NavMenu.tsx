import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaClock, FaCloud, FaHome, FaTimes } from 'react-icons/fa';
import logo192 from '../assets/logo-192.png';

const applicationDrawerId = 'application-drawer';
const navLinks = [
    {
        to: '/',
        label: 'Home',
        icon: <FaHome />,
    },
    {
        to: '/counter',
        label: 'Counter',
        icon: <FaClock />,
    },
    {
        to: '/fetch-data',
        label: 'Fetch data',
        icon: <FaCloud />,
    },
];
const NavMenu: React.FC = () => {
    const navItems = navLinks.map(({ to, label, icon }) => (
        <li key={to}>
            <NavLink to={to}>
                {icon}
                {label}
            </NavLink>
        </li>
    ));

    return (
        <div className='drawer'>
            <input id={applicationDrawerId} type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col'>
                <nav className='navbar w-full bg-base-300'>
                    <div className='flex-none lg:hidden'>
                        <label htmlFor={applicationDrawerId} className='btn btn-ghost btn-square'>
                            <FaBars className='h-6 w-6' />
                        </label>
                    </div>
                    <div className='mx-2 flex-1 px-2'>
                        <Link to='/' className='btn btn-ghost text-xl normal-case'>
                            <img src={logo192} alt='application logo' className='h-10 w-10' />
                        </Link>
                    </div>
                    <div className='hidden flex-none lg:block'>
                        <ul className='menu menu-horizontal'>{navItems}</ul>
                    </div>
                </nav>
                <Outlet />
            </div>
            <div className='drawer-side'>
                <label htmlFor={applicationDrawerId} className='drawer-overlay'></label>
                <ul className='menu w-80 gap-2 overflow-y-auto bg-base-100 p-4'>{navItems}</ul>
            </div>
        </div>
    );
};

export default NavMenu;
