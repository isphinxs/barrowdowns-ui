import './characterSheet.scss';

import NumberBox from "../numberBox/numberBox";
import StatBox from "../statBox/statBox";
import TextBox from "../textBox/textBox";

export default function CharacterSheet() {
    return(
        <>
            <div className="sheet-number">1</div>
            <div className="sheet-header">
                <TextBox>Name</TextBox>
                <TextBox>Species</TextBox>
                <TextBox>Occupation</TextBox>
                <TextBox>Alignment</TextBox>
            </div>
            <div className="combat-section">
                <div className="top-row">
                    <NumberBox>Flesh</NumberBox>
                    <NumberBox>Armor</NumberBox>
                </div>
                <div className="bottom-row">
                    <NumberBox>Melee</NumberBox>
                    <NumberBox>Ranged</NumberBox>
                    <NumberBox>Ammo Die</NumberBox>
                </div>
            </div>
            <div className="stat-section">
                <div className="top-row">
                    <StatBox>Strength</StatBox>
                    <StatBox>Intelligence</StatBox>
                </div>
                <div className="middle-row">
                    <StatBox>Dexterity</StatBox>
                    <StatBox>Wisdom</StatBox>
                </div>
                <div className="bottom-row">
                    <StatBox>Constitution</StatBox>
                    <StatBox>Charisma</StatBox>
                </div>
            </div>
            <div className="misc-section">
                <TextBox>Equipment</TextBox>
                <TextBox>Notes</TextBox>
            </div>
        </>
    );
}