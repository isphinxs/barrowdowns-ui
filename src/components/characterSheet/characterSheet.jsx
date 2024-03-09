import './characterSheet.scss';
import NumberBox from "../numberBox/numberBox";
import StatBox from "../statBox/statBox";
import TextAreaBox from '../textAreaBox/textAreaBox';
import TextBox from "../textBox/textBox";

export default function CharacterSheet({ characterNumber, character, onUpdate }) {
    const updateCharacter = (key, value) => {
        const newCharacter = { ...character };
        newCharacter[key] = value;

        // TODO determine why numbers are being converted to strings here
        console.log('character', newCharacter);
        onUpdate(characterNumber, newCharacter);
    }

    function handleNameChange(text) {
        updateCharacter('name', text);
    }
    
    function handleSpeciesChange(text) {
        updateCharacter('species', text);
    }

    function handleOccupationChange(text) {
        updateCharacter('occupation', text);
    }

    function handleAlignmentChange(text) {
        updateCharacter('alignment', text);
    }
    
    function handleFleshChange(number) {
        updateCharacter('flesh', number);
    }
    
    function handleArmorChange(number) {
        updateCharacter('armor', number);
    }
    
    function handleMeleeChange(number) {
        updateCharacter('melee', number);
    }
    
    function handleRangedChange(number) {
        updateCharacter('ranged', number);
    }
    
    function handleAmmoChange(number) {
        updateCharacter('ammo', number);
    }
    
    function handleStrScoreChange(number) {
        updateCharacter('strScore', number);
    }
    
    function handleStrModChange(number) {
        updateCharacter('strMod', number);
    }
    
    function handleIntScoreChange(number) {
        updateCharacter('intScore', number);
    }
    
    function handleIntModChange(number) {
        updateCharacter('intMod', number);
    }
    
    function handleDexScoreChange(number) {
        updateCharacter('dexScore', number);
    }
    
    function handleDexModChange(number) {
        updateCharacter('dexMod', number);
    }
    
    function handleWisScoreChange(number) {
        updateCharacter('wisScore', number);
    }
    
    function handleWisModChange(number) {
        updateCharacter('wisMod', number);
    }
    
    function handleConScoreChange(number) {
        updateCharacter('conScore', number);
    }
    
    function handleConModChange(number) {
        updateCharacter('conMod', number);
    }
    
    function handleCharScoreChange(number) {
        updateCharacter('charScore', number);
    }
    
    function handleCharModChange(number) {
        updateCharacter('charMod', number);
    }
    
    function handleEquipmentChange(text) {
        updateCharacter('equipment', text);
    }
    
    function handleNotesChange(text) {
        updateCharacter('notes', text);
    }

    return(
        <>
            <div className="sheet-number">{characterNumber} {name}</div>

            <div className="sheet-header">
                <TextBox
                    text={character.name}
                    handleTextChange={handleNameChange}
                    name="name"
                >Name</TextBox>
                <TextBox
                    text={character.species}
                    handleTextChange={handleSpeciesChange}
                    name="species"
                >Species</TextBox>
                <TextBox
                    text={character.occupation}
                    handleTextChange={handleOccupationChange}
                    name="occupation"
                >Occupation</TextBox>
                <TextBox
                    text={character.alignment}
                    handleTextChange={handleAlignmentChange}
                    name="alignment"
                >Alignment</TextBox>
            </div>

            <div className="combat-section">
                <div className="top-row">
                    <NumberBox
                        number={character.flesh}
                        handleNumberChange={handleFleshChange}
                        name="flesh"
                    >Flesh</NumberBox>
                    <NumberBox
                        number={character.armor}
                        handleNumberChange={handleArmorChange}
                        name="armor"
                    >Armor</NumberBox>
                </div>
                <div className="bottom-row">
                    <NumberBox
                        number={character.melee}
                        handleNumberChange={handleMeleeChange}
                        name="melee"
                    >Melee</NumberBox>
                    <NumberBox
                        number={character.ranged}
                        handleNumberChange={handleRangedChange}
                        name="ranged"
                    >Ranged</NumberBox>
                    <NumberBox
                        number={character.ammo}
                        handleNumberChange={handleAmmoChange}
                        name="ammo"
                    >Ammo Die</NumberBox>
                </div>
            </div>

            <div className="stat-section">
                <div className="top-row">
                    <StatBox
                        score={character.strScore}
                        mod={character.strMod}
                        handleScoreChange={handleStrScoreChange}
                        handleModChange={handleStrModChange}
                        name="strength"
                    >Strength</StatBox>
                    <StatBox
                        score={character.intScore}
                        mod={character.intMod}
                        handleScoreChange={handleIntScoreChange}
                        handleModChange={handleIntModChange}
                        name="intelligence"
                    >Intelligence</StatBox>
                </div>
                <div className="middle-row">
                    <StatBox
                        score={character.dexScore}
                        mod={character.dexMod}
                        handleScoreChange={handleDexScoreChange}
                        handleModChange={handleDexModChange}
                        name="dexterity"
                    >Dexterity</StatBox>
                    <StatBox
                        score={character.wisScore}
                        mod={character.wisMod}
                        handleScoreChange={handleWisScoreChange}
                        handleModChange={handleWisModChange}
                        name="wisdom"
                    >Wisdom</StatBox>
                </div>
                <div className="bottom-row">
                    <StatBox
                        score={character.conScore}
                        mod={character.conMod}
                        handleScoreChange={handleConScoreChange}
                        handleModChange={handleConModChange}
                        name="constitution"
                    >Constitution</StatBox>
                    <StatBox
                        score={character.charScore}
                        mod={character.charMod}
                        handleScoreChange={handleCharScoreChange}
                        handleModChange={handleCharModChange}
                        name="charisma"
                    >Charisma</StatBox>
                </div>
            </div>

            <div className="misc-section">
                <TextAreaBox
                    textArea={character.equipment}
                    handleTextAreaChange={handleEquipmentChange}
                    name="equipment"
                >Equipment</TextAreaBox>
                <TextAreaBox
                    textArea={character.notes}
                    handleTextAreaChange={handleNotesChange}
                    name="notes"
                >Notes</TextAreaBox>
            </div>
        </>
    );
}