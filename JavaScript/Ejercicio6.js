function roundTo(number, countDecimal) {
    let counter = 1;
    let decimal = 10;
    while (countDecimal > counter && decimal > 1) {
        decimal = decimal * 10;
        counter++;
    }
    return Math.round(number * decimal) / decimal;
}

const roundedResult = roundTo(567.126767, 2);

console.log(roundedResult);
