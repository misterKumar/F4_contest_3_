import React, { useState, createContext } from 'react';

export const FamiliarBookContext = createContext();

export const FamiliarBookProvider = (props) => {
  const [familiarBooks, setFamiliarBooks] = useState([]);

  return (
    <FamiliarBookContext.Provider value={[familiarBooks, setFamiliarBooks]}>
      {props.children}
    </FamiliarBookContext.Provider>
  );
};