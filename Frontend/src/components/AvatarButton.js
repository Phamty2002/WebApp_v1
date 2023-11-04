import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/styles.css';
import avatar from '../images/avatar.jpg';

function AvatarButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleSignOut = () => {
    // Perform sign-out logic here, like clearing user data
    localStorage.removeItem('userData'); // Example: Remove user data from local storage

    handleClose(); // Close the menu
    navigate('/sign-in'); // Redirect to the sign-in page
  };

  return (
    <div className="buttonContainer">
      <IconButton
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar alt="Avatar" src={avatar} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
}

export default AvatarButton;
