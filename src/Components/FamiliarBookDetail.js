import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FamiliarBookContext} from './FamiliarBookContext';

function FamiliarBookDetail() {
    const { id } = useParams();
    const [books] = useContext(FamiliarBookContext);
    const book = books.find((b) => b.id === id);

    return (
      <div className="book-card">
        
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
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
    );
  }

export default FamiliarBookDetail;