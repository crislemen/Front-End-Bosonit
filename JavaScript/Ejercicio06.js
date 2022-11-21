//Ejercicio6
function roundTo(number, countDecimal) {
    let counter = 1;
    let decimal = 10;
    while (countDecimal > counter && decimal > 1) {
        decimal = decimal * 10;
        counter++;
    }
    return Math.round(number * decimal) / decimal;
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
 
const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457