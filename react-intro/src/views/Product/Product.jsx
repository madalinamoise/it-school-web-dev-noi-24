import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import AddProduct from '../../components/AddProduct/AddProduct';
import image from './../../assets/phone.svg';
import './Product.css'; // Assuming you create a CSS file for custom styling

// HW: fetch one product and make your own design
export default function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await resp.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Header title="Loading product..." />;
  }

  if (!product) {
    return <Header title="Product not found" />;
  }

  return (
    <div className="product-container">
      <Header title={`Product: ${product.title}`} />
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const products = await resp.json();
      setProducts(products);
      console.log(products);
    };

    fetchProducts();
  }, []);

  const handleOnAddProduct = (product) => {
    product.image = image;
    product.id = Math.random();

    const newProducts = [...products, product];
    setProducts(newProducts);
  };

  return (
    <>
      <Header title='Products'></Header>

      <ProductList products={products} />
      <AddProduct onAdd={(product) => handleOnAddProduct(product)} />
    </>
  );
}
