import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {

  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired
  }

  render() {
    const { shelfName, bookList } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book) => (
              <li key={book.id}>
                <Book
                  title={ book.title }
                  authors={ book.authors }
                  imageLinks={ book.imageLinks }/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
