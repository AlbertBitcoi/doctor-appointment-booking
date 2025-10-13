import React from 'react';
import Frame from '../../../public/Frame 8.png'


const Banner = () => {
    return (
   
<div>
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold">Dependable Care, Backed by Trusted <br /> Professionals.</h1>
      <p className="py-6">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      <div className='flex gap-2 justify-center m-5'>
        <div>
            <input className='border-gray-400 border-2 rounded-2xl p-2' type="text" placeholder='Search' />
        </div>
        <div>
            <button className="btn   btn-primary rounded-2xl">Search now</button>
        </div>
     </div>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
<div>
    <img className='w-[578px] h-[350px]' src={Frame} alt="" />
  </div>
  <div>
    <img className='w-[578px] h-[350px]' src={Frame} alt="" />
  </div>
  </div>
    </div>
    
  </div>
 
  
</div>
</div>

    );
};

export default Banner;