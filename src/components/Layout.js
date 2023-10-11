// Layout.js

import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Layout() {
  return (
    <div>
      {/* Logo and Store Name */}
      <img src="/images/logo.jpg" alt="Store Logo" />
      <Typography variant="h5">Rose Petal Bistro</Typography>

      {/* Dishes Slider */}
      <Paper>
        <img src="/images/Pizza.jpg" alt="Pizza" />
        <Typography variant="h6">Pizza</Typography>
        <Typography variant="body1">Price: $10</Typography>
      </Paper>

      <Paper>
        <img src="/images/Hotdog.jpg" alt="Hotdog" />
        <Typography variant="h6">Hotdog</Typography>
        <Typography variant="body1">Price: $5</Typography>
      </Paper>

      <Paper>
        <img src="/images/Pasta.jpg" alt="Pasta" />
        <Typography variant="h6">Pasta</Typography>
        <Typography variant="body1">Price: $12</Typography>
      </Paper>

      <Paper>
        <img src="/images/Spaghetti.jpg" alt="Spaghetti" />
        <Typography variant="h6">Spaghetti</Typography>
        <Typography variant="body1">Price: $8</Typography>
      </Paper>

      <Paper>
        <img src="/images/Noodles.jpg" alt="Noodles" />
        <Typography variant="h6">Noodles</Typography>
        <Typography variant="body1">Price: $7</Typography>
      </Paper>

      {/* Order Now Button */}
      <Button variant="contained" color="primary">
        Order Now
      </Button>
    </div>
  );
}

export default Layout;
