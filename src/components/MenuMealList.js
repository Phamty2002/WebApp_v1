import React from 'react';
import './styles.css'; // Import the styles.css file
import MealItem from './MenuMealItem';

function MealList({ meals }) {
  return (
    <div id="mealList" className="meal-list">
      {meals.map((meal, index) => (
        <MealItem key={index} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
