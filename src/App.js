import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css'

import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import DashBoard from './DashBoard';
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    curReadingBookList: [],
    wantReadBookList: [],
    readBookList: []
  }

  mapToBookCom = (book) => (
      <li key={book.id}>
        <Book
          title={ book.title }
          authors={ book.authors }
          imageLinks={ book.imageLinks }/>
      </li>
  );

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        // console.log(JSON.stringify(books, null, 2));
        this.setState(() => ({
          curReadingBookList: books.filter((book) => {
            return book.shelf === 'currentlyReading';
          }),
          wantReadBookList: books.filter((book) => {
            return book.shelf === 'wantToRead';
          }),
          readBookList: books.filter((book) => {
            return book.shelf === 'read';
          })
        }));
      });
  }

  render() {
      return (
        <BrowserRouter>
          <div className="app">
              <Route exact path='/' render={() => (
                <DashBoard
                  mapToBookCom={this.mapToBookCom}
                  curReadingBookList={this.state.curReadingBookList}
                  wantReadBookList={this.state.wantReadBookList}
                  readBookList={this.state.readBookList}
                />
              )} />

              <Route path='/search' render={() => (
                <SearchBooks mapToBookCom={this.mapToBookCom} />
              )} />
          </div>
        </BrowserRouter>
      )
    }
}

export default BooksApp;
