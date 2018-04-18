import React, { Component } from 'react';
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
            {bookList.map(this.props.mapToBookCom)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
