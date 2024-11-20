import React, { useState } from "react";
import { Link } from "react-router-dom";
function Users(){
    const [users,setUsers]=useState([{
        FirstName:"Neha",
        LastName:"Singh",
        Email:"neha1@gmail.com",
        Phone:7879473274,
        Company:"afaf",
        JobTitle:"akafkjg"

    }])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>JobTitle</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      users.map((user)=>{
                        return <tr>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Company}</td>
                            <td>{user.JobTitle}</td>
                            <td>
                                <Link to="/update" className='btn btn-success'>Update</Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                      })   
                    }
                </tbody>
            </table>
            </div>
            
        </div>
    )
}

export default Users;