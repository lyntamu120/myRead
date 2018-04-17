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
              <li key={book.bookName}>
                <Book
                  bookName={ book.bookName }
                  authorName={ book.authorName }
                  bookCoverUrl={ book.bookCoverUrl }/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
