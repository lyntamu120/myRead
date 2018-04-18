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
            <Shelf shelfName='currentlyReading' mapToBookCom={this.props.mapToBookCom} bookList={curReadingBookList} />
            <Shelf shelfName='wantToRead' mapToBookCom={this.props.mapToBookCom} bookList={wantReadBookList} />
            <Shelf shelfName='read' mapToBookCom={this.props.mapToBookCom} bookList={readBookList} />
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
