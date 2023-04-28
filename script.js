fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {

    const inputSearch = document.querySelector('input');
    const img = document.querySelector('img');
    const countryCaption = document.querySelector('.img-container p');
    const country = document.querySelector('.country-info-container h2');
    const desc = document.querySelector('.desc p');
    const capital = document.querySelector('.capital p');
    const language = document.querySelector('.language p');
    const continent = document.querySelector('.continent p');
    const currency = document.querySelector('.currency p');
    const population = document.querySelector('.population p');

    img.src = data[0].flags.png;
    countryCaption.textContent = data[0].name.common;
    country.textContent = data[0].name.common;
    desc.textContent = data[0].flags.alt;
    capital.textContent = data[0].capital;
    language.textContent = Object.values(data[0].languages).join(', ');
    continent.textContent = data[0].continents[0];
    const currencyArr = [];
    Object.values(data[85].currencies).forEach(element => {
        currencyArr.push(element.name);
    });
    currency.textContent = currencyArr.join(', ');
    population.textContent = data[0].population;
    inputSearch.addEventListener('input', (e) => {
        e.preventDefault();
        try{
            
            country.textContent = inputSearch.value;
    
            for(countryData of data) {
                if(countryData.name.common.toLowerCase() == inputSearch.value.toLowerCase().trim()){
                    img.src = countryData.flags.png;
                    country.textContent = countryData.name.common;
                    countryCaption.textContent = countryData.name.common;
                    desc.textContent = countryData.flags.alt ? countryData.flags.alt : 'No description available';
                    capital.textContent = countryData.capital[0];
                    language.textContent = Object.values(countryData.languages).join(', ');
                    continent.textContent = countryData.continents[0];
                    const currencyArr = [];
                    Object.values(countryData.currencies).forEach(element => {
                        currencyArr.push(element.name);
                    });
                    currency.textContent = currencyArr.join(', ');
                    population.textContent = countryData.population;
                    break
    
                } else if(countryData.name.common.toLowerCase().includes(inputSearch.value.toLowerCase().trim())){
                    img.src = countryData.flags.png;
                    country.textContent = countryData.name.common;
                    countryCaption.textContent = countryData.name.common;
                    desc.textContent = countryData.flags.alt ? countryData.flags.alt : 'No description available';
                    capital.textContent = countryData.capital[0];
                    language.textContent = Object.values(countryData.languages).join(', ');
                    continent.textContent = countryData.continents[0];
                    const currencyArr = [];
                    Object.values(countryData.currencies).forEach(element => {
                        currencyArr.push(element.name);
                    });
                    currency.textContent = currencyArr.join(', ');
                    population.textContent = countryData.population;
                }
            };
        }
        catch{
            return
        }
        

    })
})
