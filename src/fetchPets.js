import { fetchPetUrl } from "./fetchUrl";

const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(fetchPetUrl(id));

    if (!apiRes.ok) {
        throw new Error(`Details/${id} fetch not okay`);
    }

    return apiRes.json();
};

export default fetchPet;
