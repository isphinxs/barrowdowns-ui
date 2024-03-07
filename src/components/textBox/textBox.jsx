import { useId } from 'react';

import './textBox.scss';

export default function TextBox({ children }) {
    const id = useId();

    return(
        <>
            <label htmlFor={id}>{ children }</label>
            <input id={id} type="text" />
        </>
    );
}