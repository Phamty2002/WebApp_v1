import React, { useState } from 'react';
import Header from './MenuHeader';
import Search from './MenuSearch';
import MealList from './MenuMealList';
import Modal from './MenuModal';

function Menu() {
  const containerStyle = {
    backgroundColor: '#DDCCE7', // Set the background color here
  };

  const [ingredient, setIngredient] = useState(''); // State for the ingredient input
  const [meals, setMeals] = useState([]); // State for the list of meals
  const [selectedMeal, setSelectedMeal] = useState(null); // State for the selected meal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const handleSearch = async () => {
    if (ingredient) {
      // Perform the search functionality here
      // You can make an API call to fetch meals by the ingredient
      // Update the 'meals' state with the results
    }
  };

  const handleMealClick = async (mealId) => {
    // Handle meal click to display meal details in the modal
    // You can make an API call to fetch meal details by ID
    // Update the 'selectedMeal' state and open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={containerStyle}>
      <Header />
      <Search
        ingredient={ingredient}
        setIngredient={setIngredient}
        handleSearch={handleSearch}
      />
      <MealList meals={meals} handleMealClick={handleMealClick} />
      <Modal
        meal={selectedMeal}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Menu;
