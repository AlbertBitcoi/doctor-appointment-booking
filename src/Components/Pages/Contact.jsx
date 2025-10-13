import React from 'react';

const Contact = () => {
    return (
        <div className='justify-center items-center flex mt-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Contact Us</legend>

  <label className="label">Name</label>
  <input type="Text" className="input" placeholder="Your Full Name" />

  <label className="label">Number</label>
  <input type="number" className="input" placeholder="Your Phone Number" />

  <button className="btn btn-primary mt-4">Submite</button>
</fieldset>
        </div>
    );
};

export default Contact;