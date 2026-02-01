import { useState, useRef } from "react";
import "./Calculator.css";

function Calculator() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const resultRef = useRef<HTMLParagraphElement | null>(null);
    const [result, setResult] = useState<number>(0);

    function plus(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult((prev) => prev + Number(inputRef.current?.value));
    }

    function minus(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult((prev) => prev - Number(inputRef.current?.value));
    }

    function times(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult((prev) => prev * Number(inputRef.current?.value));
    }

    function divide(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult((prev) => prev / Number(inputRef.current?.value));
    }

    function resetInput(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    function resetResult(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setResult(0);
    }

    return (
        <div className="App">
            <h1>Simplest Working Calculator</h1>

            <form>
                <p ref={resultRef}>Result: {result}</p>

                <input
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />

                <button onClick={plus}>add</button>
                <button onClick={minus}>subtract</button>
                <button onClick={times}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>
            </form>
        </div>
    );
}

export default Calculator;
