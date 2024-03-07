import { useId } from 'react';

import './textAreaBox.scss';

export default function TextAreaBox({ children }) {
    const id = useId();

    return(
        <>
            <label htmlFor={id}>{ children }</label>
            <input id={id} type="text" />
        </>
    );
}