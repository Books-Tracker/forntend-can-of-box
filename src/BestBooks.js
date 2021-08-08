import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Jumbotron>
        {isAuthenticated && (
          <div>
            <h1>My Favorite Books</h1>
            <p>This is a collection of my favorite books</p>
          </div>
        )}
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
