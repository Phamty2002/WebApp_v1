import React, { useState, useEffect } from 'react';

function RecipeSearch() {
  const [ingredient, setIngredient] = useState('chicken');
  const [meals, setMeals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch meals by ingredient
  const searchMealsByIngredient = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch meal details by ID
  const getMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      return data.meals[0];
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  // Handle meal item click
  const handleMealClick = async (mealId) => {
    const meal = await getMealDetails(mealId);
    if (meal) {
      setSelectedMeal(meal);
      setShowModal(true);
    }
  };

  useEffect(() => {
    searchMealsByIngredient();
  }, [ingredient]);

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient..."
      />

      {/* Display Meals */}
      <div className="meal-list">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-item" onClick={() => handleMealClick(meal.idMeal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-container">
          {/* Modal content here */}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default RecipeSearch;
