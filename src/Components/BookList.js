import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import "../App.css"
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function BookList() {
  const [books] = useContext(BookContext);
  
  return (
    <div className="book-list">
      {books.map((book) => 
       {
        const cr = getRandomColor();
       
       return(
        <Link to={`/book/${book.id}`} key={book.id} className="book-card"style={{ backgroundColor:cr , textDecoration: 'none' }}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <div className='right'style={{ backgroundColor: cr }} >
            <h2>{book.volumeInfo.title}</h2>
            
            <a href={book.volumeInfo.infoLink}  className='button'>More Info</a>
            
          </div>
          
        </Link>
      )})}
    </div>
  );
}

export default BookList;