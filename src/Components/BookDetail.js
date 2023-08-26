import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from './BookContext';

function BookDetail() {
    const { id } = useParams();
    const [books] = useContext(BookContext);
    const book = books.find((b) => b.id === id);
  
    if (!book) {
      return <div>Loading...</div>; 
    }
  
    return (
      <div className="dbook-card">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <div className='dright'>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.description}</p>
          <p>Author: {book.volumeInfo.authors}</p>
          <p>No. of pages : {book.volumeInfo.pageCount}</p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published date: {book.volumeInfo.publishedDate}</p>
          <p>launguage: {book.volumeInfo.language}</p>
          <p>Avg Rating : {book.volumeInfo.averageRating} | Rating Count: {book.volumeInfo.ratingsCount}</p>
          
          
          <a href={book.volumeInfo.previewLink} className='button'>Read Now</a>
        </div>
        
      </div>
    );
  }

export default BookDetail;