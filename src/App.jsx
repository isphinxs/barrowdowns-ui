import { useState } from 'react';

import './App.css';
import CharacterSheet from './components/characterSheet/characterSheet';
import { convertToBase64 } from './common/convertToBase64';
import { defaultCharacter } from './common/defaultCharacter';

function App() {
  // TODO add isDead quality
  const isDead = true;
  const [characters, setCharacters] = useState([defaultCharacter]);
  const [url, setUrl] = useState('');

  // When the page is opened, check the URL and the localstorage (in some order)
  
  const queryParams = new URLSearchParams(window.location.search);
  const sheet = queryParams.get('sheet');
  

  if (sheet) {
    console.log('grabbing sheet from url');
    const decodedSheet = decodeBase64(sheet);
    setCharacters(decodedSheet);
  }

  function decodeBase64(b64) {
    console.log('decoding...');
    const json = atob(b64);
    console.log('json', json);
  }

  function exportSheet() {
    const encodedSheet = localStorage.getItem('dndCharacters');
    setUrl(`localhost:5173/?sheet=${encodedSheet}`);
  }

  /**
   * Save character in state and store encoded character sheet
   * in local storage.
   */
  function saveCharacter(characterNumber, updatedCharacter) {
    console.log('updating state...');
    const nextCharacters = characters.map((character, idx) => {
      if (idx + 1 === characterNumber) {
        return updatedCharacter;
      } else {
        return character;
      }
    });
    setCharacters(nextCharacters);
    const encodedCharacters = convertToBase64(nextCharacters);
    localStorage.setItem('dndCharacters', encodedCharacters);
  }

  return (
    <>
      <div className="instructions">
        <div>These character sheets are saved to your browser as you play.</div>
        <div>To share your session, generate a URL: <button onClick={exportSheet}>Export</button></div>
        <div className="display-url">{url}</div>
      </div>
      {characters.map((character, idx) => (
        <div className={`character-sheet ${isDead ? 'dead' : ''}`} key={idx}>
          <CharacterSheet
            characterNumber={idx + 1}
            character={character}
            onUpdate={(characterNumber, updatedCharacter) => saveCharacter(characterNumber, updatedCharacter)}
          ></CharacterSheet>
        </div>
      ))}
    </>
  );
}

export default App;
