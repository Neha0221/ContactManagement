import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for accessing state

function UpdateUser() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the passed user object
  const { user } = location.state || {}; 

  // Early return: handle the case where no user is passed
  if (!user) {
    return <h2>No user data available for editing!</h2>; // You could redirect here if required
  }

  // Initialize form state with the passed values
  const [userData, setUserData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phoneNumber: user.phoneNumber || "",
    company: user.company || "",
    jobTitle: user.jobTitle || "",
  });

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value, // Dynamically update the state based on the field id
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get user id
    const userId = user._id;

    // Sanitize input data
    const sanitizedData = {
      ...userData,
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim(),
      email: userData.email.trim(),
      phoneNumber: userData.phoneNumber.trim(),
      company: userData.company.trim(),
      jobTitle: userData.jobTitle.trim(),
    };

    // Send PUT request to the API to update the user data
    try {
      const response = await axios.put(`http://localhost:8001/api/contacts/${userId}`, sanitizedData);
      console.log("User updated successfully:", response.data);
      navigate('/');
      // Add logic to handle success (e.g., redirecting or showing a success message)
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error display (e.g., show error message)
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>

          {/* First Name */}
          <div className="mb-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              className="form-control"
              value={userData.firstName} // Set the controlled value from state
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name */}
          <div className="mb-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              className="form-control"
              value={userData.lastName} // Controlled value
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              value={userData.email} // Controlled value
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              className="form-control"
              value={userData.phoneNumber} // Controlled value
              onChange={handleInputChange}
            />
          </div>

          {/* Company */}
          <div className="mb-2">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              placeholder="Enter Company"
              className="form-control"
              value={userData.company} // Controlled value
              onChange={handleInputChange}
            />
          </div>

          {/* Job Title */}
          <div className="mb-2">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter Job Title"
              className="form-control"
              value={userData.jobTitle} // Controlled value
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;