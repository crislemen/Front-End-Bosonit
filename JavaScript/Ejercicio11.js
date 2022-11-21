//Ejercicio11
const splitArrayIntoChunks = (array, limit) => {
    const finalArray = []
    for (let i = 0; i < array.length; i += limit) {
      const chunk = array.slice(i, i + limit);
      finalArray.push(chunk)
    }
    return finalArray
  }
const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]