import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Shelf from './Shelf';


class DashBoard extends Component {
  static propTypes = {
    curReadingBookList: PropTypes.array.isRequired,
    wantReadBookList: PropTypes.array.isRequired,
    readBookList: PropTypes.array.isRequired
  }

  render() {
    const { curReadingBookList, wantReadBookList, readBookList } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelfName='Currently Reading' bookList={curReadingBookList} />
            <Shelf shelfName='Want to Reading' bookList={wantReadBookList} />
            <Shelf shelfName='Read' bookList={readBookList} />
          </div>
        </div>
        <div className="open-search">
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default DashBoard;
