import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getdatalocalstoreg, removedatalocalstoreg } from '../../Utilitis/Utility';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Mybooking = () => {
    const docpro = useLoaderData()
    const [booking , setbooking]= useState([])
    useEffect(()=>{
        const stored = getdatalocalstoreg()
        const docid = stored.map(id => parseInt(id))
        const doctorbooking = docpro.filter(doc => docid.includes(doc.id))
        setbooking(doctorbooking)
    },[])

    const handlecancle = (id) =>{
        removedatalocalstoreg(id);
       setbooking((prev) => prev.filter((doctor) => doctor.id !== id))
        
    };

    


    return (
        <div className='bg-gray-400 p-10'>
             {booking.length === 0 ? ( 
                
       <div className='justify-center items-center text-center'> 
        <h1 className='text-center text-4xl text-black'>No appointments yet.</h1>
       <Link to={'/'}>  <button className='btn btn-primary mt-3'>Go to Home</button> </Link> 
       </div>

        
           
        ):  
        
            <div className='max-w-6xl mx-auto text-center mt-10'>
             
             <h1 className='text-6xl font-bold'>My Today Appointments</h1>
             <p className='mt-5 text-2xl'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
             <div  className='grid-cols-1'>
                {
               
                    booking.map(doctoro => <div key={doctoro.id}  className='card flex justify-between shaddow-sm  w-full p-10 bg-white max-w-6xl mx-auto mt-10 '> 
                    <div className='justify-start text-start'>
                        <h1>{doctoro.name}</h1>
                        <p>{doctoro.education}</p>
                    </div>
                    <div className='text-end'>
                        <p>Appointment Fee: {doctoro.fees}Taka</p>
                    </div>
                    <button  className="btn btn-error btn-sm w-full mt-4 rounded-xl" onClick={()=>handlecancle(doctoro.id)}>Cancle appoinment</button>
               

                    
                     </div>)
                }

             </div>
            </div>
            
            }
            
        </div>
    );
};

export default Mybooking;