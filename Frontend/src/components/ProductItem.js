import React from 'react';
import axios from 'axios';

const ProductItem = ({ product, setProducts, viewProduct, editProduct, deleteProduct }) => {
    // Handler for deleting a product
  // Handler for deleting a product
  const handleDelete = async () => {
    try {
      await deleteProduct(product.name); // Call the deleteProduct prop function
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleEdit = () => {
    // Logic for handling edit will go here
  };

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => viewProduct(product.name)}>View</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
