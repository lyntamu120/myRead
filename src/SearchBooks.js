import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: '',
    resultBooks: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
    BooksAPI.search(query)
      .then((resultBooks) => {
        this.setState(() => ({
          resultBooks
        }));
      });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* {this.state.resultBooks.map(this.props.mapToBookCom)} */}
            {this.state.resultBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    updateBookShelves={this.updateBookShelves}
                    book={ book }
                  />
                </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
