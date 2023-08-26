import React, {useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookContext, BookProvider } from './Components/BookContext';
import { FamiliarBookContext, FamiliarBookProvider } from './Components/FamiliarBookContext';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';
import SearchBar from './Components/SearchBar';
import FamiliarBookList from './Components/FamiliarBookList';
import "./App.css";

function App() {
  const [books, setBooks] = useContext(BookContext);
  const [familiarBooks, setFamiliarBooks] = useContext(FamiliarBookContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes');
        const response3 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=all');
        
        setBooks([...response1.data.items, ...response2.data.items]);
        setFamiliarBooks([...response3.data.items]);
      } catch (error) {
        console.error("Error fetching books: ", error);
        setError(error);
        setBooks('');
        setFamiliarBooks('');
      }
    };
  
    fetchBooks();
  }, [setBooks, setFamiliarBooks]);

  return (
    <Router>
      <div className="App">
      {error && <div className='err'>Error occurred: {error.message}</div>}
      <br/>
        <SearchBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/favourite" element={<FamiliarBookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
        <div>
          <h2>More Like This</h2>
          <FamiliarBookList />
        </div>
      </div>
    </Router>
  );
}

function AppWithProvider() {
  return (
    <BookProvider>
      <FamiliarBookProvider>
        <App />
      </FamiliarBookProvider>
    </BookProvider>
  );
}

export default AppWithProvider;
