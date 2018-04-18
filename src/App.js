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

  updateBookShelves = () => {
    BooksAPI.getAll()
      .then((books) => {
        // console.log(JSON.stringify(books, null, 2));
        console.log('Inside App/, page should be refleshed');
        const curReadingBookList = books.filter((book) => {
          return book.shelf === 'currentlyReading';
        });
        const wantReadBookList = books.filter((book) => {
          return book.shelf === 'wantToRead';
        });
        const readBookList = books.filter((book) => {
          return book.shelf === 'read';
        });
        // console.log('The length of curReadingBookList is ', curReadingBookList.length);
        // console.log('The length of wantReadBookList is ', wantReadBookList.length);
        // console.log('The length of readBookList is ', readBookList.length);
        this.setState(() => ({
          curReadingBookList,
          wantReadBookList,
          readBookList
        }));
      });
  }

  mapToBookCom = (book) => (
      <li key={book.id}>
        <Book
          updateBookShelves={this.updateBookShelves}
          book={ book }
        />
      </li>
  );

  componentDidMount() {
    this.updateBookShelves();
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
                <SearchBooks
                  mapToBookCom={this.mapToBookCom}
                  updateBookShelves={this.updateBookShelves}
                  />
              )} />
          </div>
        </BrowserRouter>
      )
    }
}

export default BooksApp;
