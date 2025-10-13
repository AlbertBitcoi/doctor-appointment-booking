import React, { Suspense } from 'react';
import { Link} from 'react-router';

const Doctor = ({doctor}) => {
 
  const {id,doctor_image,name,education,experience,registration_number} = doctor;

  
  
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-10 bg-gray-50'>
    <img className='rounded-2xl'
      src={doctor_image} />
  </figure>
  <div className='flex gap-5 mt-5 ml-5'>
    <div>
      <button className="btn btn-soft btn-accent border-2 rounded-2xl">Available</button>
    </div>
    <div>
      <button className="btn btn-soft btn-primary border-2 rounded-2xl">{experience}experiance</button>
      
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{education}</p>
    <div className='border-2 border-gray-400  border-dashed'></div>
    <p>Reg No:{registration_number}</p>
    <div className="card-actions ">
      
       
<Link to={`doctordetails/${id}`} className='w-full'>
    <button  className="btn btn-block btn-outline btn-primary rounded-2xl">View details</button>  
</Link>




        
      
     
      
      
    </div>
  </div>
</div>


        </div>
    );
};

export default Doctor;