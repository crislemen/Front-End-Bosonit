//Ejercicio8
function fromBytesToFormattedSizeUnits(i, decimals = 3) {
    const formats = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const bytes = Math.abs(i);
    if (bytes == 0) return "No bytes";
    if (i < 0) {
        return "-" + result;
      }
    const num = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
    const result = (bytes / Math.pow(1000, num)).toPrecision(decimals) + " " + formats[num];
    return result;
  }
  
  const result1 = fromBytesToFormattedSizeUnits(1000);
  console.log(result); // 1KB
   
  const result2 = fromBytesToFormattedSizeUnits(123456789);
  console.log(result); // 123MB
   
  const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
  console.log(result); // -12.145GB
  