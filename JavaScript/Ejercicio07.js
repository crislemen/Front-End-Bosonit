//Ejercicio7
function returnFalsyValues(obj,func) {
    for(let[key,value]of Object.entries(obj)){
        if (func(value)) {
            delete obj[key]
        }
    }
    return obj;
}
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(result); // {a: 1, c: 3}