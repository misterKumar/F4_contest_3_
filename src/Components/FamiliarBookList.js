import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FamiliarBookContext } from './FamiliarBookContext';

function FamiliarBookList() {
  const [books] = useContext(FamiliarBookContext);

  return (
    <div className="morebook-list">
      {books.map((book) => (
        <Link to={book.volumeInfo.infoLink} key={book.id} className="morebook-card">
          
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          
        </Link>
      ))}
    </div>
  );
}

export default FamiliarBookList;