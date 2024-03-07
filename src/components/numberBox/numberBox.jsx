import { useId } from "react";

export default function NumberBox({ children }) {
    const id = useId();

    return(
        <>
            <div className="number-box">
                <label htmlFor={id}>{ children }</label>
                <input id={id} type="number"/>
            </div>
        </>
    );
}