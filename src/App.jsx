import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    const adoptedPet = useState(null);
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adoptedPet}>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <div>
                        <Routes>
                            <Route path="details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </div>
                </AdoptedPetContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
