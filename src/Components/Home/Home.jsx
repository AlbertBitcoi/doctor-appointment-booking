import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctor/Doctors';

const Home = () => {
    const doctorsdata = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Doctors doctorsdata ={doctorsdata } ></Doctors>
        </div>
    );
};

export default Home;