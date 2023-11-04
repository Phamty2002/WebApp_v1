import React, { useState } from 'react';
import Header from './Header';
import pizzaImage from '../images/pizza.jpg';
import hotdogImage from '../images/hotdog.jpg';
import pastaImage from '../images/pasta.jpg';
import spaghettiImage from '../images/spaghetti.jpg';
import noodlesImage from '../images/noodles.jpg';

import {
    Card,
    CardContent,
    Button,
    TextField,
    CardActions,
    Typography,
    Grid,
  } from '@mui/material';
  
  function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Hotdog',
      description: 'A classic hotdog with your favorite condiments.',
      price: 4.99,
      image: pizzaImage,
    },
    {
      id: 2,
      name: 'Noodles',
      description: 'Savory noodles with your preferred ingredients.',
      price: 6.99,
      image: noodlesImage,
    },
    {
      id: 3,
      name: 'Pasta',
      description: 'Fresh pasta cooked to perfection.',
      price: 9.99,
      image: pastaImage,
    },
    {
      id: 4,
      name: 'Pizza',
      description: 'Delicious pizza with your choice of toppings.',
      price: 12.99,
      image: pizzaImage,
    },
    {
      id: 5,
      name: 'Spaghetti',
      description: 'Spaghetti with your choice of sauce.',
      price: 10.99,
      image: spaghettiImage,
    },
    // Add more menu items as needed
  ]);

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder = (item) => {
    // Implement the order logic here
    // You can add the selected item to the cart or perform any other action.
  };

  const cardStyle = {
    marginLeft: '25px', // Adjust the margin value as needed
  };

  const imageStyle = {
    maxWidth: '80%', // Limit the image width to the container's width
    maxHeight: '80%', // Limit the image height to the container's height
    objectFit: 'cover', // Maintain the aspect ratio and cover the entire container
    
  };

  const searchInputStyle = {
    marginTop: '20px', // Add margin to the search bar
  };

  return (
    <div>
      <Header />
      <TextField
        label="Search Food"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />
      <Grid container spacing={2} className="menu-items">
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={6}>
            <Card variant="outlined" className="menu-item-card" style={cardStyle}>
              <CardContent>
                <img
                  src={item.image}
                  alt={item.name}
                  style={imageStyle}
                  className="menu-item-image"
                />
                <Typography variant="h6">{item.name}</Typography>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOrder(item)}
                >
                  Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Menu;










