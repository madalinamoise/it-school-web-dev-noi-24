import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import AddProductForm from './AddProductForm';
import './AddProduct.css'

export default function AddProduct({ onAdd }) {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleOnSubmit = (value) => {
    onAdd(value)
    setShow(false)
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add-product">
        <Button variant="dark" size="lg" onClick={handleShow}>Add Product</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='add-product-title'>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm onSubmit={(value) => handleOnSubmit(value)} />
        </Modal.Body>
      </Modal>
    </>
  )
}