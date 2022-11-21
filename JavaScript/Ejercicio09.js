//Ejercicio9
function toLowercaseKeys(object){
    const x = {}
    for (let key in object) {
       x[key.toLowerCase()]=object[key];
    }
    return x
}
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }