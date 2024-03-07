import { useId } from 'react';

import './textBox.scss';

export default function TextBox({ children, text, handleTextChange }) {
    const id = useId();

    const saveChange = (event) => {
        handleTextChange(event.target.value);
    }

    return(
        <>
            <label htmlFor={id}>{ children }</label>
            <input
                id={id}
                type="text"
                value={text}
                onChange={saveChange}
            />
        </>
    );
}