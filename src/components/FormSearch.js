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
                <label for="search">Search for stuff</label>
                <input
                    id="search"
                    type="search"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    autofocus
                    autoComplete="off"
                    required
                />
                <button>Search</button>
            </form>
        </>
    );
};

export default FormSearch;
