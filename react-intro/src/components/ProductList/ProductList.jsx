import { useNavigate } from 'react-router';
import Card from './../../common/Card/Card';
import './ProductList.css';

//HW: add delete button on card and erase product from list
export default function ProductList({ products, onDelete }) {
  let navigate = useNavigate();

  return (
    <div className='product-list'>
      {products.length > 0 &&
        products.map((product) => (
          <Card
            key={product.id}
            uniqueId={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.title}
            onDelete={() => onDelete(product.id)}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
    </div>
  );
}
