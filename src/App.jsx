import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppContext from "./AppContext";
import { useState } from "react";

const App = () => {
    const adoptedPet = useState(null);
    return (
        <BrowserRouter>
            <AppContext.Provider value={adoptedPet}>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <div>
                    <Routes>
                        <Route path="details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
