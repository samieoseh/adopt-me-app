import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <div>
                <Routes>
                    <Route path="details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
