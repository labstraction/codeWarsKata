//controllo l'ultimo carattere della stringa:
//se non è un numero ritorno la stringa + 1
//ciclare al contrario sulla stringa
//se invece è un numero devo controllare il penultimo e così via...
//quando trovo il primo carattere non numero taglio la sottostringa da indice + 1;
//parso la sottostringa 
//la incremento di uno
//ritorno una stinga composta dalla sottostringa da 0 a indice + il numero incrementato

function incrementString(string) {
    let lastChar = string[string.length - 1];
    if (isNaN(lastChar)) {
        return string + 1;
    }
    let importantIndex
    for (let i = string.length - 2; i >= 0; i--) {
        if (isNaN(string[i])) {
            importantIndex = i;
            break;
        }
    }
    const partialString = string.substring(0, importantIndex + 1);
    const stringNumber = string.substring(importantIndex + 1);
    const number = parseInt(stringNumber);
    const incrementNumber = number + 1;

    return partialString + incrementNumber;
}


function incrementString2(string) {
    const regex = RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    if (!searchResult) {
        return string + 1;
    } else {
        let numberFoundString = searchResult[0];
        const numberInt = parseInt(numberFoundString);
        const incrementNumber = numberInt + 1;
        return string.substring(0, string.length-numberFoundString.length) + incrementNumber
    }
    
}


console.log("Mi aspetto 'montagna89' ho ottenuto: ", incrementString2("montagna88"));
console.log("Mi aspetto 'montagna1' ho ottenuto: ", incrementString2("montagna"))
console.log("Mi aspetto '55montagna1' ho ottenuto: ", incrementString2("55montagna"))
console.log("Mi aspetto 'montagna20002' ho ottenuto: ", incrementString2("montagna20001"));