import React from 'react';
import Header from './Header'; // Import the Header component
import ProductList from './ProductList'; // To list and perform CRUD on products
import ProductForm from './ProductForm'; // To add a new product

const ManageProducts = () => {
  return (
    <div>
      <Header /> {/* Include the Header at the top */}
      <ProductForm /> {/* This can be a modal or a separate section for adding products */}
      <ProductList /> {/* This will list all products and include options to edit or delete them */}
    </div>
  );
};

export default ManageProducts;
