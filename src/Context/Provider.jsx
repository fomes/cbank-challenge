
import React, { useState } from 'react';
import MyContext from './Context';

function Provider({ children }) {
  const [allPets, setAllPets] = useState([]);
  const [idPetCard, setIdPetCard] = useState("");
  
  const contextValue = {
    allPets,
    setAllPets,
    idPetCard,
    setIdPetCard,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
