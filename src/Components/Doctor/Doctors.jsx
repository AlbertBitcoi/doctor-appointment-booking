import React, { useState } from 'react';
import Doctor from './Doctor';
import Doctorico from '../../../public/./doctorico.png'
import Star from '../../../public/./starico.png'
import Pationt from '../../../public/./pationtico.png'
import Stuff from '../../../public/./stuffico.png'
import CountUp from 'react-countup';

const Doctors = ({doctorsdata }) => {
    console.log(doctorsdata )
    const [showAll, setshowAll] = useState(false)
    const doctortoShow = showAll? doctorsdata: doctorsdata.slice(0, 6)
const handleViewAll = () => {
    setshowAll(!showAll); // Toggles the value: false -> true, true -> false
  };

    return (
        <div className='max-w-6xl mx-auto mt-10 bg-base-200 mb-5 '>
           <div className='p-10'>
             <h1 className='text-3xl font-bold text-center '>Our Best Doctors</h1>
            <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                 doctortoShow.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)   
                }

            </div>
            <div className='justify-center items-center flex mt-5'>
                <button className="btn  btn-primary rounded-4xl" onClick={handleViewAll}>{ showAll? 'Show less': 'View All Doctor'} </button>
            </div>
            <div className='max-w-6xl mx-auto mt-10'>
          <h1 className='text-3xl font-bold text-center'>We Provide Best Medical Services</h1>
          <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
          <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-5 mt-5 ' >
            <div className='bg-white p-5 rounded-2xl'>
                <img src={Doctorico} alt="" />
                <CountUp className='text-3xl font-bold' start={0} end={199} duration={10} >
                    
                </CountUp>
                <p>Total Doctors</p>
            </div>
            <div className='bg-white p-5 rounded-2xl'>
                <img src={Star} alt="" />
                <CountUp className='text-3xl font-bold' start={0} end={467} duration={10} >
                    
                </CountUp>
                <p>Total Reviews</p>
            </div>
            <div className='bg-white p-5 rounded-2xl'>
                <img src={Pationt} alt="" />
                <CountUp className='text-3xl font-bold' start={0} end={1900} duration={10} >
                    
                </CountUp>
                <p>Patients</p>
            </div>
            <div className='bg-white p-5 rounded-2xl'>
                <img src={Stuff} alt="" />
                <CountUp className='text-3xl font-bold' start={0} end={300} duration={10} >
                    
                </CountUp>
                <p>Total Stuffs</p>
            </div>
          </div>
</div>

        </div>
    );
};

export default Doctors;