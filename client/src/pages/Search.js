import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "./components/Card";

class Search extends Component {
  state = {
    searchTerm: "",
    books: []
  }
  
  componentDidMount() {
    this.loadSearchResults();
  }

  
  loadBooks = () => {
    API.googleThis(searchTerm)
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
          <Card 
            value={this.state.title}
            name={this.state.authors}
            description={this.state.description}
            href={this.state.link}
            />

        
        
      </div>

    )
  }
}

export default Search