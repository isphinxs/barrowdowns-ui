import { useId } from 'react';

import './statBox.scss';

export default function StatBox({ children }) {
    const id = useId();

    return(
        <>
            <div className="stat">
                <div className="stat-title">
                    { children }
                </div>
                <div className="stat-box">
                    <label htmlFor={id}>Score</label>
                    <input id={id} type="number" />
                </div>
                <div className="stat-box">
                    <label htmlFor={id}>Modifier</label>
                    <input id={id} type="number" />
                </div>
            </div>
        </>
    );
}
