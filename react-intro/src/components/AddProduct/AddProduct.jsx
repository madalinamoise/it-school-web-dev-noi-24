import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddProductForm from './AddProductForm';

const AddProduct = ({ onAdd }) => {
  const [show, setShow] = useState(false);

  const handleOnSubmit = (value) => {
    onAdd(value);
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='success' onClick={handleShow}>
        Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProductForm onSubmit={(value) => handleOnSubmit(value)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProduct;
