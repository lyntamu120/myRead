import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css'

// import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import DashBoard from './DashBoard';

class BooksApp extends React.Component {
  state = {
    curReadingBookList: [],
    wantReadBookList: [],
    readBookList: []
  }

render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Route exact path='/' render={() => (
              <DashBoard
                curReadingBookList={this.state.curReadingBookList}
                wantReadBookList={this.state.wantReadBookList}
                readBookList={this.state.readBookList}
              />
            )} />

            <Route path='/search' render={() => (
              <SearchBooks />
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;
