import { useEffect, useState } from 'react';

import './home.scss';
import CharacterSheet from '../characterSheet/characterSheet';
import { convertToBase64, decodeBase64 } from '../../common/base64.helper';
import { defaultCharacter } from '../../common/defaultCharacter';

function Home() {
    const defaultCharacters = [defaultCharacter, defaultCharacter, defaultCharacter, defaultCharacter, defaultCharacter, defaultCharacter, defaultCharacter, defaultCharacter];
    const [characters, setCharacters] = useState(defaultCharacters);

    // TODO implement URL export
    // When the page is opened, check the URL and the localstorage (in some order)
    // redirect after loading
    // const queryParams = new URLSearchParams(window.location.search);
    // const [queryParams, setQueryParams] = useSearchParams();
    // const navigate = useNavigate();
    //     let sheet = queryParams.get('share');
    
    // if (sheet) {
    //     console.log('grabbing sheet from url');
    //     const decodedSheet = decodeBase64(sheet);
    //     // queryParams.delete('share');
    //     setQueryParams({});
    //     sheet = undefined;
    //     setCharacters(decodedSheet);
    //     navigate("home");
    // }

    // function exportSheet() {
    //     const sheet = localStorage.getItem('dndCharacters');
    //     const encodedSheet = convertToBase64(sheet);
    //     setUrl(`localhost:5173/?share=${encodedSheet}`);
    // }

    /**
     * When the page is opened or refreshed, check localstorage
     */
    useEffect(() => {
        const storedCharacters = localStorage.getItem('dndCharacters');
    
        if (storedCharacters) {
            setCharacters(decodeBase64(storedCharacters));
        }
    }, []);

    /**
     * Save character in state and local storage.
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

    if (!characters) {
        return (
            <div>Error, no characters. Try reloading.</div>
        )
    } else {
        return (
            <>
                <div className="instructions">
                    <div>These character sheets are saved to your browser as you play.</div>
                    {/* <div>To share your session, generate a URL: <button onClick={exportSheet}>Export</button></div>
                    <div className="display-url">{url}</div> */}
                </div>
                <div className="character-sheets">
                    {characters.map((character, idx) => (
                        <div className={`character-sheet ${character.isDead ? 'dead' : ''}`} key={idx}>
                        <CharacterSheet
                            characterNumber={idx + 1}
                            character={character}
                            onUpdate={(characterNumber, updatedCharacter) => saveCharacter(characterNumber, updatedCharacter)}
                        ></CharacterSheet>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Home;
