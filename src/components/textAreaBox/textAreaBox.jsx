import { useId } from 'react';

import './textAreaBox.scss';

export default function TextAreaBox({ children, textArea, handleTextAreaChange }) {
    const id = useId();

    function saveChange(event) {
        handleTextAreaChange(event.target.value);
    }

    return(
        <>
            <label htmlFor={id}>{ children }</label>
            <textarea 
                id={id}
                type="textarea" 
                value={textArea}
                onChange={saveChange}
            />
        </>
    );
}