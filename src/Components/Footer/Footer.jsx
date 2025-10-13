import React from 'react';
import Logo from '../../../public/logo.png'
import { Link, Links } from 'react-router';
import { NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
    const Links = <>
        <NavLink to="/" className='m-2'>Home</NavLink>
        <NavLink to="/my-booking" className='m-2'>My-bookings</NavLink>
        <NavLink to="/blog" className='m-2'>Blog</NavLink>
        <NavLink to="/contact" className='m-2'>Contact us</NavLink>
    </>
    return (
       <footer className="footer footer-horizontal footer-center  text-black-content p-10 bg-base-100 shadow-sm mt-5">
  <aside>
     <div className='flex'>
        <a href=""><img src={Logo} alt="" /></a>
        <strong className='mt-5 ml-2'>Doc Zone</strong>
     </div>
     <div className='flex'>
        {Links}
     </div>
  </aside>
  {/* <div class=" border-t-1 w-full border-dashed"></div> */}
  
    <div className="grid grid-flow-col gap-4">
      
      <Link to='https://www.facebook.com/webaxe94/'><FaFacebook size="30px" color='006AFF' /></Link>
      <Link to='https://www.linkedin.com/in/samidzamanwebdeveloper/'><FaSquareXTwitter size="30px" /></Link>
      <Link to='https://www.linkedin.com/in/samidzamanwebdeveloper/'><FaLinkedin size="30px" color='blue' /></Link>
      <Link to='https://www.youtube.com/@Samidzaman'><FaYoutube size="30px" color='red' /></Link>
    </div>
</footer>
    );
};

export default Footer;