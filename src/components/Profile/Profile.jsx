import React from 'react'
import './Profile.css';
import profileImage from '../assets/profileImage.png'

export default function Profile() {
  return (
    <div className="wrapper-profile">
      <h1>User Profile</h1>
      <div className='parent-user-details'>
        <div className="profile-details">
            <div><strong>Username:</strong> Shaswata123</div>
            <div><strong>Email:</strong> shaswata@abc.com</div>
            <div><strong>First Name:</strong> Shaswata </div>
            <div><strong>Last Name:</strong> Das </div>
            <div><strong>Phone:</strong> 7076974888</div>
            <div><strong>Address:</strong> Kolkata</div>
        </div>
        <div className='profile-picture'>
            <img src={profileImage} alt="Profile" />
            {/* <img src="https://drive.google.com/uc?export=view&id=1S4l58LLwUpFFPkLIkUbhDtLscr_rvDKq" alt="Profile" /> */}
        </div>
      </div>
    </div>
  )
}
