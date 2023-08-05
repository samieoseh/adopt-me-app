import { fetchBreedListUrl } from "./fetchUrl";

const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const apiRes = await fetch(fetchBreedListUrl(animal));

    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch not okay`);
    }

    return apiRes.json();
};

export default fetchBreedList;
