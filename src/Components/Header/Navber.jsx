import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../public/logo.png'

const Navber = () => {
   const Links = <>
        <NavLink to="/" className='m-2'>Home</NavLink>
        <NavLink to="/my-booking" className='m-2'>My-bookings</NavLink>
        <NavLink to="/blog" className='m-2'>Blog</NavLink>
        <NavLink to="/contact" className='m-2'>Contact us</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn bg-none"><img className='w-[48px] h-[48px]' src={Logo} alt="" /> Doc Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {Links}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to='/emargency'>
               <button className='btn btn-primary rounded-4xl'>Emergency</button>
               </Link>

              
            </div>
        </div>
    );
};

export default Navber;