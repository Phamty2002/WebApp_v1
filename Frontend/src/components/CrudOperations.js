import React, { useState } from 'react';
import Header from './Header';
import { useEffect } from 'react';


function CrudOperations() {
    const [action, setAction] = useState(null);
    const [product, setProduct] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (action === 'see') {
      fetch('/api/products') // Adjust the URL to wherever your API is hosted
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [action]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      setProduct(prevProduct => ({ ...prevProduct, image: files[0] }));
    } else {
      setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('image', product.image); // Assuming you're handling image uploads
  
    fetch('/api/products', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Product created:', data))
    .catch(error => console.error('Error creating product:', error));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    fetch(`/api/products/update/${currentProduct.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: currentProduct.price,
        description: currentProduct.description
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product updated:', data);
      // Here you can update the products list or give feedback to the user
    })
    .catch(error => console.error('Error updating product:', error));
  };


  const handleDelete = (name) => {
  fetch(`/api/products/delete/${name}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    console.log('Product deleted:', data);
    // Here you would filter out the deleted product from the `products` state
    setProduct(product.filter(product => product.name !== name));
  })
  .catch(error => console.error('Error deleting product:', error));
};

const startEditingProduct = (product) => {
    setCurrentProduct(product);
    setAction('update');
  };

// This function is triggered when any of the action buttons are clicked
const changeAction = (newAction) => {
    setAction(newAction);
  };  


  const renderBox = () => {
    switch (action) {
      case 'insert':
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={product.id}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={product.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
  
      case 'see':
        return (
          <div>
            <h3>Product List</h3>
            {product.map((product, index) => (
              <div key={index}>
                <p>ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={() => {
                  setCurrentProduct(product);
                  setAction('update');
                }}>Update</button>
                <button onClick={() => handleDelete(product.name)}>Delete</button>
              </div>
            ))}
          </div>
        );
  
      case 'update':
        return (
          <form onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={currentProduct.name}
              onChange={handleInputChange}
              disabled
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={currentProduct.price}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={currentProduct.description}
              onChange={handleInputChange}
            />
            <button type="submit">Update Product</button>
          </form>
        );
  
      case 'delete':
        // You may want to handle delete within the 'see' case by adding delete buttons next to each product
        return <p>Select a product to delete from the list.</p>;
  
      default:
        return <div>Select an action</div>;
    }
  };
  

  return (
    <div>
      <Header />
      <button onClick={() => changeAction('insert')}>Insert</button>
      <button onClick={() => changeAction('see')}>See</button>
      <button onClick={() => changeAction('update')}>Update</button>
      <button onClick={() => changeAction('delete')}>Delete</button>
      {renderBox()}
    </div>
  );
}

export default CrudOperations;