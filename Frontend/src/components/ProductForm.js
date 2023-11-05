import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ productToEdit, setProducts, clearProductToEdit }) => {
  // If productToEdit has a value, we're in "edit" mode, otherwise we're adding a new product.
  const isEditMode = productToEdit !== null;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    // You might need to handle the image file separately if you're uploading files
  });

  // If productToEdit changes and is not null, update the formData state
  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: productToEdit.name,
        price: productToEdit.price,
        description: productToEdit.description,
        // Make sure you handle the image state correctly if necessary
      });
    }
  }, [productToEdit, isEditMode]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditMode) {
      // Update product
      try {
        await axios.put(`/api/products/${productToEdit.name}`, formData);
        // Here you would also update the products state in the parent component
        setProducts((prevProducts) => {
          // Logic to update the product in the products array
        });
        // Clear the form
        clearProductToEdit();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      // Add product
      try {
        const response = await axios.post('/api/products', formData);
        setProducts((prevProducts) => [...prevProducts, response.data]);
        // Clear the form
        setFormData({
          name: '',
          price: '',
          description: '',
        });
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };


  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          {isEditMode ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
