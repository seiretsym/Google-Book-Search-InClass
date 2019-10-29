import React, { Component } from "react"
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "../components/Card";

class Search extends Component {
  state = {
    searchTerm: "",
    books: []
  }
  
  componentDidMount() {
    this.loadSearchResults();
  }

  loadSearchResults = () => {

  }
  
  loadBooks = () => {
    API.googleThis(this.state.searchTerm)
      .then(res =>
        this.setState({
            books: res.items.map(book => {
                let item = {
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    thumbnail: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink
                }
                return item;
            })})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
          <Card />
      </div>

    )
  }
}

export default Search