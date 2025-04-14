import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function AddProductForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name: name,
      price: price,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        name='name'
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label htmlFor='price'>Price</label>
      <input
        name='price'
        placeholder='price'
        value={price}
        type='number'
        onChange={(e) => setPrice(e.target.value)}
      ></input>

      <Button variant='primary' type='submit'>
        Add
      </Button>
    </form>
  );
}