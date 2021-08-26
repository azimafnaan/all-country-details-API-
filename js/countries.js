const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
        // for (const country of countries) {
        //     console.log(country)
        // }
        const countriesDiv = document.getElementById('countries')
        countries.forEach(country => {
                    const div = document.createElement('div')
                    div.classList.add('country')
                    div.innerHTML = `
            <h2>Country Name : ${country.name}</h2>
            <p>Capital City : ${country.capital}</p>
            <p>Calling Code: ${country.callingCodes}</p>
            <p>Population: ${country.population}</p>
            <button onClick="loadCountryByName('${country.name}')">Details</button>  
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `
                    https: //restcountries.eu/rest/v2/name/${name}`;
                        fetch(url)
                        .then(res => res.json())
                        .then(data => displayCountryDetail(data[0]));
                }
                const displayCountryDetail = country => {
                    const countryDiv = document.getElementById('country-detail');
                    countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <img width="200px" src="${country.flag}">
    `

                };