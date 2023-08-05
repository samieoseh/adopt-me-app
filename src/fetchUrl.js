export const fetchPetUrl = (id) => `http://pets-v2.dev-apis.com/pets?id=${id}`;
export const fetchBreedListUrl = (animal) =>
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
export const fetchSearchUrl = (animal, location, breed) =>
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
