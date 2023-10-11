import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper, Button } from '@mui/material';

function Slider() {
  const items = [
    {
      name: 'Pizza',
      description: 'Delicious pizza with your choice of toppings.',
      image: '/images/pizza.jpg',
    },
    {
      name: 'Hotdog',
      description: 'A classic hotdog with your favorite condiments.',
      image: '/images/hotdog.jpg',
    },
    {
      name: 'Pasta',
      description: 'Fresh pasta cooked to perfection.',
      image: '/images/pasta.jpg',
    },
    {
      name: 'Spaghetti',
      description: 'Spaghetti with your choice of sauce.',
      image: '/images/spaghetti.jpg',
    },
    {
      name: 'Noodles',
      description: 'Savory noodles with your preferred ingredients.',
      image: '/images/noodles.jpg',
    },
    // You can continue to add more items as needed
  ];

  return (
    <Carousel animation="slide">
      {items.map((item, index) => (
        <Paper key={index}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button variant="contained" color="primary">
            Go to Menu
          </Button>
        </Paper>
      ))}
    </Carousel>
  );
}

export default Slider;
