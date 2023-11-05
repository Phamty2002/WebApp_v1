import React from 'react';

const ProductItem = ({ product, setProducts, viewProduct, editProduct, deleteProduct }) => {
  // Handler for editing a product
  const handleEdit = () => {
    // Trigger the edit process, for example by opening an edit modal.
    // You would pass the product to be edited to the editProduct function.
    // The editProduct function could be responsible for setting the state in the parent component
    // to indicate which product is being edited, or it could open a modal with the product's details.
    editProduct(product.name, product); // This line is just illustrative; actual implementation may vary.
  };

  // Handler for deleting a product
  const handleDelete = async () => {
    try {
      await deleteProduct(product.name); // Use the deleteProduct function passed via props.
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => viewProduct(product.id)}>View</button> {/* Assuming viewProduct needs the id */}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button> {/* Call handleDelete when delete button is clicked */}
    </div>
  );
};

export default ProductItem;
