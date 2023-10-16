import React from 'react';
import './styles.css'; // Import the styles.css file

function Modal({ meal }) {
  return (
    <div className="modal-container">
      <button id="recipeCloseBtn" className="close-button">
        &times;
      </button>
      <div className="meal-details-content">
        {/* Display meal details here */}
      </div>
    </div>
  );
}

export default Modal;
