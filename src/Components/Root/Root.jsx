import React from 'react';
import Navber from '../Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../Scroll/ScrollToTop';

const Root = () => {
    return (
        <div>
           
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;