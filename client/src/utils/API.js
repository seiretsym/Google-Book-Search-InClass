import axios from "axios";

export default {
    // search google books for books
    googleThis: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + process.env.REACT_APP_API_KEY)
    },

    // server side
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
}