// Importing necessary modules and components from React and other custom files
import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

// Array of available animal types used in the select dropdown
const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];

// The main component - SearchParams
const SearchParams = () => {
    // State variables to store user inputs and data from API
    const [location, setLocation] = useState(""); // The user-entered location
    const [animal, setAnimal] = useState(""); // The selected animal type
    const [breed, setBreed] = useState(""); // The selected breed of the animal
    const [pets, setPets] = useState([]); // The array of pets obtained from API

    // Custom hook to fetch the list of available breeds for the selected animal
    const [breeds] = useBreedList(animal);

    // useEffect hook to fetch pets data from the API when the component mounts
    useEffect(() => {
        requestPets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function to fetch pets data from the API based on user inputs
    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    // JSX rendering of the search form and the list of pets
    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        disabled={breeds.length === 0}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {/* Rendering the list of pets */}
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
