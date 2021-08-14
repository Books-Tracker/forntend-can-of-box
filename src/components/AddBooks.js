import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class AddBooks extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event) =>{this.props.submitAddBookForm(event)}}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter book name" />
                <Form.Label>Book description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter book description" />
                <Form.Label>Book Status</Form.Label>
                <Form.Control type="text" name="Status" placeholder="Enter book Status" />
                
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddBooks;
