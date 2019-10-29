import React, { Component } from 'react';
import Card from "../components/Card/index.js";
import API from "../utils/API";

class Saved extends Component {
    state = {
      books: []
    }
    
    componentDidMount() {
      this.loadSearchResults();
    }
  
    
    loadBooks = () => {
      API.getBooks(searchTerm)
        .then(res =>
          this.setState({
              books: res.items.map(book => {
                  let book = {
                      title: book.volumeInfo.title,
                      author: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      thumbnail: book.volumeInfo.imageLinks.thumbnail,
                      link: book.volumeInfo.infoLink
                  }
                  return book;
              })})
        )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div className="container-fluid">
          value={this.state.title}
          name={this.state.authors}
          description={this.state.description}
          href={this.state.link}
          
  
          
          
        </div>
  
      )
    }
  }
  
  // res.items[].volumeInfo.title
  // res.items[].volumeInfo.authors
  // res.items[].volumeInfo.description
  // res.items[].volumeInfo.imageLinks.thumbnail
  // res.items[].volumeInfo.infoLink
  
  export default Saved