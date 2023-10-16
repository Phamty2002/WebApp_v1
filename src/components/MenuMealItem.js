import React from 'react';
import './styles.css'; // Import the styles.css file

function MealItem({ meal }) {
  return (
    <div className="meal-item">
      <img src={meal.image} alt={meal.name} />
      <h3>{meal.name}</h3>
    </div>
  );
}

export default MealItem;
