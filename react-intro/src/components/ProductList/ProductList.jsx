import Card from '../common/Card/Card';
import './ProductList.css';

export default function ProductList({ products }) {
  return (
    <div className='product-list'>
      {products.length > 0 &&
        products.map((product) => (
          <Card
            key={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.name}
          />
        ))}
    </div>
  );
}
