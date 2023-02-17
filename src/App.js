import "./css/App.css";
import Logo from "./assets/logo";
import { useState } from "react";
import FormSearch from "./components/FormSearch";
import ListVideo from "./components/ListVideos";
function App() {
    const [query, setQuery] = useState("chill");
    return (
        <div className="app">
            <header className="app-header">
                <div className="logo">
                    <Logo />
                </div>
            </header>

            <main>
                <div className="container">
                    <div>
                        <FormSearch query={query} setQuery={setQuery} />
                    </div>
                    <div className="list-view">
                        <ListVideo query={query} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
