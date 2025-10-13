import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { adddatalocalstoreg } from '../../Utilitis/Utility';
import Swal from 'sweetalert2'

const Doctordetails = () => {
    const { id } = useParams()
    const doctordata = useLoaderData()
    const doctorId = parseInt(id)
    const docdata = doctordata.find(doc =>  doc.id === doctorId)
    const { name, doctor_image, education, working_hospital, registration_number, availability_days, fees } = docdata;

    const appointment = (id) =>{
        adddatalocalstoreg(id)
    Swal.fire({
  title: "Appointment Complete",
  icon: "success",
  draggable: true
});
    }
    return (
        <div className='bg-gray-300 p-10'>
            <div className='card text-center w-full p-10 bg-white max-w-6xl mx-auto mt-20 '>
                <h1 className='text-3xl font-bold text-center'>Doctor’s Profile Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className="p-20 bg-white min-h-screen rounded-2xl mt-10">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className='w-[30%]'>
                        <img
                            src={doctor_image}
                            className="max-w-sm  rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className='w-[70%]'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p >
                            {education}
                        </p>
                        <div className="py-6">
                            <p>Working at</p>
                            <strong>{working_hospital}</strong>
                        </div>
                        <div className='border-1  border-gray-300  border-dashed mt-5'></div>
                        <p>Reg No: {registration_number}</p>
                        <div className='border-1  border-gray-300  border-dashed mt-5'></div>
                        <strong>Availability:
                            {
                                availability_days.map((day, index) => <button key={index} className="btn btn-soft btn-warning">{day}</button>)
                            }
                        </strong> <br />
                        <strong className='mt-5'>Consultation Fee: {fees} TAKA(include vat)</strong>
                    </div>
                </div>
            </div>
            <div className='card text-center w-full p-10 bg-white max-w-6xl mx-auto mt-10 '>
                <h1 className='text-3xl font-bold text-center'>Book an Appointment</h1>
                <div className='justify-between flex mt-5'>
                    <div>
                        <h4>Availability</h4>
                    </div>
                    <div>
                        <button className="btn btn-soft  btn-success">doctor available today</button>

                    </div>
                </div>
                <div className='border-amber-300 border-1 rounded-2xl mt-5'>
                    <p className='text-orange-300'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>
                <button onClick={()=>appointment(id)} className="btn btn-block btn-primary rounded-2xl mt-5">Book Appointment Now</button>
            </div>
        </div>
    );
};

export default Doctordetails;