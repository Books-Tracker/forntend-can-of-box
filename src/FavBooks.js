import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

class FavBooks extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.booksStatus &&
          this.props.bookData.map((value) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={value.img} />
                <Card.Body>
                  <Card.Title>Book Title:{value.title}</Card.Title>
                  <Card.Text>Description:{value.Description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Status:{value.status}</ListGroupItem>
                </ListGroup>
              </Card>
            );
          })}
      </>
    );
  }
}

export default FavBooks;

