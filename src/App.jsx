import { useState } from 'react';

import CharacterSheet from './components/characterSheet/characterSheet';
import './App.css';

function App() {
  const isDead = true;
  const characters = [1, 2, 3, 4, 5, 6, 7, 8];
  // const characters = ['', '', '', '', '', '', '', ''];

  return (
    <>
      <button>Export</button>
      {characters.map((character, idx) => (
        <div className={`character-sheet ${isDead ? 'dead' : ''}`} key={idx}>
          <CharacterSheet>{character}</CharacterSheet>
        </div>
      ))}
    </>
  );
}

export default App;
