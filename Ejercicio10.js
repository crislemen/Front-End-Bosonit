//Ejercicio10
function removeHTMLTags (str) {
    return str.replace(/<[^>]*>/g, '')
    }
    
    
    const result1 = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
     
    console.log(result1); // lorem ipsum