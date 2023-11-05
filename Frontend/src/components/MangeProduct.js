// In your Menu component
import React from 'react';
import Header from './Header';
import ProductList from './productList'; // To display all products and handle add, update, delete
import ProductForm from './productForm'; // To add a new product

const ManageProducts = () => {
  return (
    <div>
      <ProductForm /> {/* This can be a modal or a separate section */}
      <ProductList />
    </div>
  );
};

export default ManageProducts;