import { useId } from 'react';

import './statBox.scss';

export default function StatBox({ children, score, mod, handleModChange, handleScoreChange }) {
    const modId = useId();
    const scoreId = useId();

    function saveModChange(event) {
        handleModChange(event.target.value);
    }

    function saveScoreChange(event) {
        handleScoreChange(event.target.value);
    }

    return(
        <>
            <div className="stat">
                <div className="stat-title">
                    { children }
                </div>
                <div className="stat-box stat-score">
                    <label htmlFor={scoreId}>Score</label>
                    <input
                        id={scoreId}
                        type="number"
                        value={score}
                        onChange={saveScoreChange}
                    />
                </div>
                <div className="stat-box stat-mod">
                    <label htmlFor={modId}>Modifier</label>
                    <input
                        id={modId}
                        type="number"
                        value={mod}
                        onChange={saveModChange}
                    />
                </div>
            </div>
        </>
    );
}
