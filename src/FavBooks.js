import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

class FavBooks extends React.Component {
  render() {
    return (
      this.props.booksStatus &&
      this.props.bookData[0].Books.map((value) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Book Title:{value.name}</Card.Title>
              <Card.Text>Description:{value.Description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Status:{value.status}</ListGroupItem>
            </ListGroup>
          </Card>
        );
      })
    );
  }
}

export default FavBooks;
