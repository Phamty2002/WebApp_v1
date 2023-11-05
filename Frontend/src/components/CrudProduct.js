import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import { ProductsContext } from '../context/ProductsContext';

function CrudOperations() {
  const { products, setProducts } = useContext(ProductsContext);

  const [action, setAction] = useState(null);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image_path: ''
  });
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image_path: ''
  });


  useEffect(() => {
    if (action === 'see') {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [action, setProducts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (action === 'update') {
      setCurrentProduct({ ...currentProduct, [name]: value });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product created:', data);
        setProducts([...products, data]);
        setProduct({ id: '', name: '', price: '', description: '', image_path: '' }); // Reset the form
      })
      .catch(error => console.error('Error creating product:', error));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/products/update/${currentProduct.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: currentProduct.price,
        description: currentProduct.description,
        // You may include other fields as needed
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated:', data);
        setProducts(products.map(p => (p.id === currentProduct.id ? { ...p, ...data } : p)));
        setCurrentProduct({ id: '', name: '', price: '', description: '', image_path: '' }); // Reset the form
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const handleDelete = (productName) => {
    fetch(`/api/products/delete/${productName}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product deleted:', data);
        setProducts(products.filter(product => product.name !== productName));      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const [deleteProductName, setDeleteProductName] = useState('');

  const renderBox = () => {
    switch (action) {
      case 'insert':
        return (
          <form onSubmit={handleSubmit}>
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
              type="text"
              name="image_path"
              placeholder="Image Path"
              value={product.image_path}
              onChange={handleInputChange}
            />
      <button type="submit" style={{ marginTop: '10px' }}>Update Product</button>
          </form>
        );
        case 'see':
  return (
    <div>
      <h3>Product List</h3>
      {products.map((product, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><span style={{ fontWeight: 'bold' }}>ID:</span> {product.id}</p>
          <p><span style={{ fontWeight: 'bold' }}>Name:</span> {product.name}</p>
          <p><span style={{ fontWeight: 'bold' }}>Price:</span> {product.price}</p>
          <p><span style={{ fontWeight: 'bold' }}>Description:</span> {product.description}</p>
          {product.image_path && (
            <img src={product.image_path} alt={product.name} style={{ width: '500px', height: '300px', display: 'block', marginBottom: '15px', marginTop: '10px'}} />
          )}
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => {
              setCurrentProduct(product);
              setAction('update');
            }} style={{ marginRight: '10px' }}>Update</button>
            <button onClick={() => handleDelete(product.name)}>Delete</button>
          </div>
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
            <input
              type="text"
              name="image_path"
              placeholder="Image Path"
              value={currentProduct.image_path}
              onChange={handleInputChange}
            />
            <button type="submit" style={{ marginTop: '10px' }}>Update Product</button>

          </form>
        );
        case 'delete':
          
            const handleDeleteByName = () => {
              handleDelete(deleteProductName);
              setDeleteProductName(''); // Reset the input after delete
            };
          
            return (
                <div>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    value={deleteProductName}
                    onChange={(e) => setDeleteProductName(e.target.value)}
                    style={{ marginRight: '10px' }}
                  />
                  <button onClick={handleDeleteByName} style={{ marginTop: '10px', }}>Delete Product</button>
                </div>
              );
              default:
      return null; // Handle any unexpected action value
    }
  };

  return (
    <div>
        <Header />
    <div className="container">
      <div className="button-group">
        <button onClick={() => setAction('insert')}>Insert</button>
        <button onClick={() => setAction('see')}>See</button>
        <button onClick={() => setAction('update')}>Update</button>
        <button onClick={() => setAction('delete')}>Delete</button>
      </div>
      {renderBox()}
    </div>
    </div>
  );
  }

export default CrudOperations;
