import { useId } from "react";

export default function NumberBox({ children, number, handleNumberChange }) {
    const id = useId();

    function saveChange(event) {
        handleNumberChange(event.target.value);
    }

    return(
        <>
            <div className="number-box">
                <label htmlFor={id}>{ children }</label>
                <input
                    id={id}
                    type="number"
                    value={number}
                    onChange={saveChange}
                />
            </div>
        </>
    );
}