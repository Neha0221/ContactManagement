import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const navigate=useNavigate();
    
    const handleSubmit = (e) => {
        console.log("Event: ", e);
        e.preventDefault();
        axios.post("http://localhost:8001/api/contacts", {
            firstName,
            lastName,
            email,
            phone,
            company,
            jobTitle,
        })
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            placeholder='Enter First Name'
                            className='form-control'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            placeholder='Enter Last Name'
                            className='form-control'
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            placeholder='Enter Phone Number'
                            className='form-control'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            placeholder='Enter Company'
                            className='form-control'
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-2'>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            placeholder='Enter Job Title'
                            className='form-control'
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>
                    
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
