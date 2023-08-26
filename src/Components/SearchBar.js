import React, { useState, useContext } from 'react';
import axios from 'axios';
import { BookContext } from './BookContext';
import {FaHome} from 'react-icons/fa';
import {BiSolidBookHeart} from 'react-icons/bi';
import {MdNotificationsActive,MdDiamond} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import "../images/logo.png"
import { Link } from 'react-router-dom';
function SearchBar() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useContext(BookContext);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error searching books: ", error);
      setError(error);
        setBooks('');
        setQuery('');
    }
  };

  return (
    <div className='nav-container'>
       {error && <div className='err'>Error occurred: {error.message}</div>}
      <img src={require("../images/logo.png")} alt='logo'/>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='field' placeholder='Search for the book you want and read it now Harry potter , sherlock holmes' />
      <button onClick={searchBooks}>Search</button>
      <Link to={'/'}><FaHome/></Link>
      <Link to={'/'}><BiSolidBookHeart/></Link>
      <Link to={'/'}><MdNotificationsActive/></Link>
      <Link to={'/'}><MdDiamond/></Link>
      <Link to={'/'}><CgProfile/></Link>

    </div>
  );
}

export default SearchBar;