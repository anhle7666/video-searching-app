import { useState } from "react";
import "../css/FormSearch.css";

const FormSearch = ({ setQuery }) => {
    const [text, setText] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setQuery(text);
    };

    return (
        <>
            <form onSubmit={submitForm} role="search">
                <label htmlFor="search">Search for stuff</label>
                <input
                    id="search"
                    className="input-search"
                    type="search"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    autoFocus
                    autoComplete="off"
                    required
                />
                <button className="btn-search">Search</button>
            </form>
        </>
    );
};

export default FormSearch;
