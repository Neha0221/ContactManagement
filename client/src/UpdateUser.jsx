import React from "react";

function UpdateUser(){
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded p-3'>
            <form>
              <h2>Update User</h2>
              
              <div className='mb-2'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder='Enter First Name' className='form-control' />
              </div>
              
              <div className='mb-2'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder='Enter Last Name' className='form-control' />
              </div>
              
              <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='Enter Email' className='form-control' />
              </div>
              
              <div className='mb-2'>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder='Enter Phone Number' className='form-control' />
              </div>
              
              <div className='mb-2'>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder='Enter Company' className='form-control' />
              </div>
              
              <div className='mb-2'>
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" placeholder='Enter Job Title' className='form-control' />
              </div>
              
              <button className='btn btn-success'>Submit</button>
            </form>
          </div>
        </div>
      );
      
}

export default UpdateUser;