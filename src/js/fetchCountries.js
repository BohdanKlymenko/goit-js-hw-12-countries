export default function fetchCountries(searchQuery) {
  if (searchQuery) {
    return fetch(`https://restcountries.com/v3/name/${searchQuery}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
