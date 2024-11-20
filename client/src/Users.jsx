import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure Navigation works

function Users() {
    // Initialize users state as an empty array
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // To programmatically navigate

    // Fetch users from the API when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8001/api/contacts");
                setUsers(response.data); // Populate users into state
                console.log("Fetched users:", response.data); // For debugging
            } catch (error) {
                console.error("Error while fetching users:", error);
                if (error.response) {
                    console.log("Error status:", error.response.status); // HTTP status code
                }
            }
        };

        fetchUsers();
    }, []);  // Runs only on component mount

    // Handle user deletion
    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8001/api/contacts/${id}`);
            setUsers(prevState => prevState.filter(user => user._id !== id)); // Update local state
            console.log(`User with ID: ${id} deleted`);
        } catch (error) {
            console.error("Error while deleting user:", error);
        }
    };

    // Navigate to the update page with user ID passed to `Link`
    const handleUpdateUser = (user) => {
        navigate(`/update`,{ state: { user } });
    };


    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success mb-3'>Add +</Link>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          users.length > 0 ? ( // Safely map over users if it's not empty
                              users.map((user, index) => (
                                  <tr key={index}>
                                      <td>{user.firstName || 'N/A'}</td>
                                      <td>{user.lastName || 'N/A'}</td>
                                      <td>{user.email || 'N/A'}</td>
                                      <td>{user.phoneNumber || 'N/A'}</td>
                                      <td>{user.company || 'N/A'}</td>
                                      <td>{user.jobTitle || 'N/A'}</td>
                                      <td>
                                          <div className="d-flex">
                                              <button
                                                  onClick={() => handleUpdateUser(user)}
                                                  className='btn btn-warning me-2'>Update
                                              </button>

                                              <button
                                                  onClick={() => handleDeleteUser(user._id)}
                                                  className='btn btn-danger'>Delete
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="7" className="text-center">
                                      No users available
                                  </td>
                              </tr>
                          )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;