import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import AddProductForm from './AddProductForm';

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
      <Button variant="success" size="lg" onClick={handleShow}>Add Product</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm onSubmit={(value) => handleOnSubmit(value)} />
        </Modal.Body>
      </Modal>
    </>
  )
}