import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './productForm';
import ProductItem from './productItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Method to add a new product
  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post('/api/products', newProduct);
      setProducts([...products, response.data]); // Add the new product to the list
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Method to fetch a single product
const viewProduct = async (id) => {
  try {
    const response = await axios.get(`/api/products/${id}`);
    console.log(response.data); // Do something with the product data, like showing it in a modal or a detailed view
  } catch (error) {
    console.error('Error fetching the product:', error);
  }
};

// Method to update a product by name
const editProduct = async (productName, updatedData) => {
  try {
    const response = await axios.put(`/api/products/${productName}`, updatedData);
    // Find the index of the product that was updated
    const index = products.findIndex((product) => product.name === productName);
    // Update the product in the state
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], ...response.data };
    setProducts(updatedProducts);
  } catch (error) {
    console.error('Error updating the product:', error);
  }
};

// Method to delete a product by name
const deleteProduct = async (productName) => {
  try {
    await axios.delete(`/api/products/${productName}`);
    setProducts(products.filter((product) => product.name !== productName)); // Update the state to remove the product
  } catch (error) {
    console.error('Error deleting the product:', error);
  }
};

return (
  <div>
    <ProductForm setProducts={addProduct} />
    {products.map((product) => (
      <ProductItem 
        key={product.id} 
        product={product} 
        setProducts={setProducts} 
        viewProduct={viewProduct} // Pass editProduct to ProductItem
        editProduct={editProduct} // Pass editProduct to ProductItem
        deleteProduct={deleteProduct} // Pass deleteProduct to ProductItem
      />
    ))}
  </div>
);
};

export default ProductList;
