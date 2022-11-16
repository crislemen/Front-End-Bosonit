//Ejercicio4
const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const commons = arrNumber2.filter(x => arrNumber1.indexOf(x) !== -1)
commmons2 = arrNumber2.filter(x => arrNumber3.indexOf(x) !== -1);
commmons2.forEach(valor => {
    if (valor != commons.indexOf()) {
        commons.push(valor);
    }
})
console.log(commons);