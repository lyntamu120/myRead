import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired;
  }
  render() {
    const { bookName, authorName, bookCoverUrl } = this.props.bookInfo;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCoverUrl})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ bookName }</div>
        <div className="book-authors">{ authorName }</div>
      </div>
    );
  }
}

export default Book;
