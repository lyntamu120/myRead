import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelves: PropTypes.func.isRequired
  }

  state = {
    readingState: this.props.book.shelf ? this.props.book.shelf : 'none'
  }

  onChangeReadingState = (event) => {
    const value = event.target.value;
    this.setState(() => ({
      readingState: value
    }));
    BooksAPI.update(this.props.book, value)
      .then((shelfArr) => {
        this.props.updateBookShelves();
      });
  }

  render() {
    const { title, authors, imageLinks } = this.props.book;
    const firAuthor = authors && authors.length > 0 ? authors[0] : 'unknown';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={this.onChangeReadingState}
              value={this.state.readingState}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">{ firAuthor }</div>
      </div>
    );
  }
}

export default Book;
