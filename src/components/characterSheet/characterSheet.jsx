import { useState } from 'react';

import './characterSheet.scss';
import NumberBox from "../numberBox/numberBox";
import StatBox from "../statBox/statBox";
import TextAreaBox from '../textAreaBox/textAreaBox';
import TextBox from "../textBox/textBox";

export default function CharacterSheet({ children }) {
    const updateCharacter = () => {
        convertToBase64();
    }

    const convertToBase64 = () => {
        console.log('converting...');
        const data = {
            number: 1
        };
        const json = btoa(JSON.stringify(data));
        console.log('encoded string', json);
        decodeBase64(json);
    }

    const decodeBase64 = (b64) => {
        console.log('decoding...');
        const json = atob(b64);
        console.log('json', json);
    }

    // Text handlers
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [occupation, setOccupation] = useState('');
    const [alignment, setAlignment] = useState('');

    function handleNameChange(text) {
        setName(text);
    }

    function handleSpeciesChange(text) {
        setSpecies(text);
    }

    function handleOccupationChange(text) {
        setOccupation(text);
    }

    function handleAlignmentChange(text) {
        setAlignment(text);
    }

    // Number handlers
    const [flesh, setFlesh] = useState(0);
    const [armor, setArmor] = useState(0);
    const [melee, setMelee] = useState(0);
    const [ranged, setRanged] = useState(0);
    const [ammo, setAmmo] = useState(0);
    
    function handleFleshChange(number) {
        setFlesh(number);
        updateCharacter();
    }
    
    function handleArmorChange(number) {
        setArmor(number);
        updateCharacter();
    }
    
    function handleMeleeChange(number) {
        setMelee(number);
        updateCharacter();
    }
    
    function handleRangedChange(number) {
        setRanged(number);
        updateCharacter();
    }
    
    function handleAmmoChange(number) {
        setAmmo(number);
        updateCharacter();
    }
    
    // Stat handlers
    const [strScore, setStrScore] = useState(0);
    const [strMod, setStrMod] = useState(0);
    const [intScore, setIntScore] = useState(0);
    const [intMod, setIntMod] = useState(0);
    const [dexScore, setDexScore] = useState(0);
    const [dexMod, setDexMod] = useState(0);
    const [wisScore, setWisScore] = useState(0);
    const [wisMod, setWisMod] = useState(0);
    const [conScore, setConScore] = useState(0);
    const [conMod, setConMod] = useState(0);
    const [charScore, setCharScore] = useState(0);
    const [charMod, setCharMod] = useState(0);
    
    function handleStrScoreChange(number) {
        setStrScore(number);
        updateCharacter();
    }
    
    function handleStrModChange(number) {
        setStrMod(number);
        updateCharacter();
    }
    
    function handleIntScoreChange(number) {
        setIntScore(number);
        updateCharacter();
    }
    
    function handleIntModChange(number) {
        setIntMod(number);
        updateCharacter();
    }
    
    function handleDexScoreChange(number) {
        setDexScore(number);
        updateCharacter();
    }
    
    function handleDexModChange(number) {
        setDexMod(number);
        updateCharacter();
    }
    
    function handleWisScoreChange(number) {
        setWisScore(number);
        updateCharacter();
    }
    
    function handleWisModChange(number) {
        setWisMod(number);
        updateCharacter();
    }
    
    function handleConScoreChange(number) {
        setConScore(number);
        updateCharacter();
    }
    
    function handleConModChange(number) {
        setConMod(number);
        updateCharacter();
    }
    
    function handleCharScoreChange(number) {
        setCharScore(number);
        updateCharacter();
    }
    
    function handleCharModChange(number) {
        setCharMod(number);
        updateCharacter();
    }
    
    // Text area handlers
    const [equipment, setEquipment] = useState('');
    const [notes, setNotes] = useState('');
    
    function handleEquipmentChange(number) {
        setEquipment(number);
        updateCharacter();
    }
    
    function handleNotesChange(number) {
        setNotes(number);
        updateCharacter();
    }

    return(
        <>
            <button onClick={convertToBase64}>Exporttttt</button>
            <div className="sheet-number">{children}</div>
            <div className="sheet-header">
                <TextBox text={name} handleTextChange={handleNameChange}>Name</TextBox>
                <TextBox text={species} handleTextChange={handleSpeciesChange}>Species</TextBox>
                <TextBox text={occupation} handleTextChange={handleOccupationChange}>Occupation</TextBox>
                <TextBox text={alignment} handleTextChange={handleAlignmentChange}>Alignment</TextBox>
            </div>
            <div className="combat-section">
                <div className="top-row">
                    <NumberBox number={flesh} handleNumberChange={handleFleshChange}>Flesh</NumberBox>
                    <NumberBox number={armor} handleNumberChange={handleArmorChange}>Armor</NumberBox>
                </div>
                <div className="bottom-row">
                    <NumberBox number={melee} handleNumberChange={handleMeleeChange}>Melee</NumberBox>
                    <NumberBox number={ranged} handleNumberChange={handleRangedChange}>Ranged</NumberBox>
                    <NumberBox number={ammo} handleNumberChange={handleAmmoChange}>Ammo Die</NumberBox>
                </div>
            </div>
            <div className="stat-section">
                <div className="top-row">
                    <StatBox
                        score={strScore}
                        mod={strMod}
                        handleScoreChange={handleStrScoreChange}
                        handleModChange={handleStrModChange}
                    >Strength</StatBox>
                    <StatBox
                        score={intScore}
                        mod={intMod}
                        handleScoreChange={handleIntScoreChange}
                        handleModChange={handleIntModChange}
                    >Intelligence</StatBox>
                </div>
                <div className="middle-row">
                    <StatBox
                        score={dexScore}
                        mod={dexMod}
                        handleScoreChange={handleDexScoreChange}
                        handleModChange={handleDexModChange}
                    >Dexterity</StatBox>
                    <StatBox
                        score={wisScore}
                        mod={wisMod}
                        handleScoreChange={handleWisScoreChange}
                        handleModChange={handleWisModChange}
                    >Wisdom</StatBox>
                </div>
                <div className="bottom-row">
                    <StatBox
                        score={conScore}
                        mod={conMod}
                        handleScoreChange={handleConScoreChange}
                        handleModChange={handleConModChange}
                    >Constitution</StatBox>
                    <StatBox
                        score={charScore}
                        mod={charMod}
                        handleScoreChange={handleCharScoreChange}
                        handleModChange={handleCharModChange}
                    >Charisma</StatBox>
                </div>
            </div>
            <div className="misc-section">
                <TextAreaBox textArea={equipment} handleTextAreaChange={handleEquipmentChange}>Equipment</TextAreaBox>
                <TextAreaBox textArea={notes} handleTextAreaChange={handleNotesChange}>Notes</TextAreaBox>
            </div>
        </>
    );
}