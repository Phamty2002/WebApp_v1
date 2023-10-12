import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper, Button } from '@mui/material';

function Slider() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const items = [
    {
      name: 'Pizza',
      description: 'Delicious pizza with your toppings.',
      image: 'static/images/pizza.jpg',
    },
    {
      name: 'Hotdog',
      description: 'A classic hotdog with your condiments.',
      image: 'static/images/hotdog.jpg',
    },
    {
      name: 'Pasta',
      description: 'Fresh pasta cooked to perfection.',
      image: 'static/images/pasta.jpg',
    },
    {
      name: 'Spaghetti',
      description: 'Spaghetti with your choice of sauce.',
      image: 'static/images/spaghetti.jpg',
    },
    {
      name: 'Noodles',
      description: 'Savory noodles with your ingredients.',
      image: 'static/images/noodles.jpg',
    },
    // You can continue to add more items as needed
  ];

  const handleNext = () => {
    setSelectedSlide((selectedSlide + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedSlide((selectedSlide - 1 + items.length) % items.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', marginTop: '20px' }}>
      <Carousel
        selectedItem={selectedSlide}
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={33.3}
        onClickThumb={() => {}}
      >
        {items.map((item, index) => (
          <Paper key={index} style={{ padding: '10px', width: '480px', display: 'flex', flexDirection: 'column', height: '100%',marginLeft: '-185px'  }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
            <div style={{ padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" color="primary">
                  Go to Menu
                </Button>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
      <div style={{ marginTop: '20px', textAlign: 'center', marginLeft: '0px' }}>
        <Button variant="contained" color="primary" onClick={handlePrev} style={{ marginRight: '10px' }}>
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: '10px' }}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Slider;
