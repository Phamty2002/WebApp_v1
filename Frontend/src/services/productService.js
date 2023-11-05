// src/services/productService.js

import axios from 'axios';

const apiBaseUrl = 'http://localhost:3001/api/products'; // Adjust this if necessary

// Get all products
const getAllProducts = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  // Get product by ID
  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  };
  
  // Create a new product
  const createProduct = async (productData) => {
    try {
      const response = await axios.post(apiBaseUrl, productData);
      return response.data;
    } catch (error) {
      console.error('Error creating a product:', error);
      throw error;
    }
  };
  
  // Update a product by name
  const updateProductByName = async (name, updateData) => {
    try {
      const response = await axios.put(`${apiBaseUrl}/update/${name}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Error updating the product:', error);
      throw error;
    }
  };
  
  // Delete a product by name
  const deleteProductByName = async (name) => {
    try {
      const response = await axios.delete(`${apiBaseUrl}/delete/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting the product:', error);
      throw error;
    }
  };
  
  export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductByName,
    deleteProductByName
  };