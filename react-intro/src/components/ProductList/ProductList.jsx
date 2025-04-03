import Card from '../common/Card/Card';
import './ProductList.css';

export default function ProductList({ products }) {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <Card
          key={product.id}
          imageUrl={product.imageUrl}
          price={product.price}
          title={product.name}
        />
      ))}
    </div>
  );
}
