// Importing necessary modules and components from React and other custom files
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import fetchAccessToken from "./fetchAccessToken";

// Array of available animal types used in the select dropdown
const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];

// The main component - SearchParams
const SearchParams = () => {
    // State variables to store user inputs and data from API
    const [animal, setAnimal] = useState(""); // The selected animal type
    const [adoptedPet] = useContext(AdoptedPetContext);
    const [requestParams, setRequestParams] = useState({
        animal: "",
        location: "",
        breed: "",
    });

    const results = useQuery(["search", requestParams], fetchSearch);
    const accessToken = useQuery(["access-token"], fetchAccessToken);
    console.log(accessToken.data);
    const pets = results?.data?.pets ?? [];

    // Custom hook to fetch the list of available breeds for the selected animal
    const [breeds] = useBreedList(animal);

    // JSX rendering of the search form and the list of pets
    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    setRequestParams(obj);
                }}
            >
                {adoptedPet ? (
                    <div className="pet image-container">
                        <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                    </div>
                ) : null}
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location"
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
                        name="breed"
                        disabled={breeds.length === 0}
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
