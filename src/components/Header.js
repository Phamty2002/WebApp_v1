import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AvatarButton from './AvatarButton';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#B470D4' }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src="/images/logo.jpg" alt="Logo" width="40" height="40" />
          <Typography variant="h6" sx={{ marginLeft: 2, color: '#FFFFFF' }}>
            Rose Petal Bistro
          </Typography>
          
        </Box>
        <Box display="flex" flexGrow={1} justifyContent="flex-end">
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Sign In</Button>
          <AvatarButton/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
