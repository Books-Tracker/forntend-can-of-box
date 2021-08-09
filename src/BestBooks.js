import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./BestBooks.css";
import FavBooks from "./FavBooks";

export class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      booksStatus: false,
    };
  }

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`
      )

      .then((axiosResponse) => {
        // console.log(axiosResponse.data);
        this.setState({
          bookData: axiosResponse.data,
          booksStatus: true,
        });
      })

      .catch((error) => {
        alert(error.message);
      });
  };


  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Jumbotron>
        {isAuthenticated && (
          <div>
            <h1>My Favorite Books</h1>
            <p>This is a collection of my favorite books</p>
            <FavBooks />
          </div>
        )}
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
