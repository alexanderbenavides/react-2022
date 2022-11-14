const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getService = async (path) => {
    return  fetch(`${baseUrl}/${path}`)
    .then(response => response.json())
    .then(json => json)
    .catch(error => error);
}