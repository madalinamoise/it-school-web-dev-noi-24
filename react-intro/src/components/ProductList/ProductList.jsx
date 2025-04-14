import { useNavigate } from 'react-router';
import Card from './../../common/Card/Card';
import './ProductList.css';
import { useState, useEffect } from 'react';

//HW: add delete button on card and erase product from list


export default function ProductList({ products }) {
  const [productList, setProductList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const handleDelete = (productToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProductList((prevList) =>
        prevList.filter((product) => product.id !== productToDelete.id)
      );
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {productList.length === 0 && <p>Loading...</p>}
      {productList.length > 0 && productList.length < 3 && (
        <p>Only {productList.length} products available.</p>
      )}
      {productList.length > 0 ? (
        productList.map((product) => (
          <Card
            key={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.title}
            onClick={() => navigate(`/product/${product.id}`)}
            onDelete={() => handleDelete(product)}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}