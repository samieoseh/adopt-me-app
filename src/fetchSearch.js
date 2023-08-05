import { fetchSearchUrl } from "./fetchUrl";

const fetchSearch = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(fetchSearchUrl(animal, location, breed));
    if (!res.ok) {
        throw new Error(`Pet search not okay ${animal}, ${location}, ${breed}`);
    }

    return res.json();
};

export default fetchSearch;
