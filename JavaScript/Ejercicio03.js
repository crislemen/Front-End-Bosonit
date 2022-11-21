//Ejercicio3
const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Paris', country: 'France', capital: true },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Rome', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]
arrCities.forEach(valor => {
    if (valor.capital == false) {
        console.log(valor)
    }
});
