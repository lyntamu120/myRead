import React from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css'

// import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    curReadingBookList: [],
    wantReadBookList: [],
    readBookList: [],
    showSearchPage: false
  }

  render() {
    const bookList = [{
      'bookName': 'To Kill a Mockingbird',
      'authorName': 'Harper Lee',
      'bookCoverUrl': 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    },{
      'bookName': 'To Kill a Mockingbird1',
      'authorName': 'Harper Lee',
      'bookCoverUrl': 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    }];
    return (
      <BrowserRouter>
        <div className="app">
            <Route exact path='/' render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Shelf shelfName='Currently Reading' bookList={bookList} />
                    <Shelf shelfName='Want to Reading' bookList={bookList} />
                    <Shelf shelfName='Read' bookList={bookList} />
                  </div>
                </div>
                <div className="open-search">
                  <Link to='search'>Add a book</Link>
                </div>
              </div>
              )} />

            <Route path='/search' render={() => (
              <SearchBooks />
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
