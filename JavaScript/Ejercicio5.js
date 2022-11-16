//Ejercicio5
const arrCities2 = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Bordeaux', country: 'France', capital: false },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Florence', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]
const cities = [];
arrCities2.forEach(valor => {
    if (valor.country == 'Spain' && valor.capital == false) {
        cities.push({ city: valor.city, isSpain: true })
    } if (valor.country != 'Spain' && valor.capital == false) {
        cities.push({ city: valor.city, isSpain: false })
    }
});
console.log(cities);