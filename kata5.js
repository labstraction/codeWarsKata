
function getMiddle(string) {
    let stringLength = string.length;
    if (stringLength % 2 === 0) {
        let firstCharIndex = (stringLength / 2) - 1;
        let secondCharIndex = stringLength / 2;
        return string[firstCharIndex] + string[secondCharIndex];
    } else {
        let charIndex = Math.floor(stringLength / 2);
        return string[charIndex];
    }
}

function getMiddle2(string) {
    return [...string].reduce((p,c,i,a) => a.length % 2 === 0 ? string.substring((i/2), ((i/2)+2)) : a[i/2])
}

function getMiddle3(string) {
    return string.slice((string.length-1)/2, string.length/2+1);
}



console.log("Mi aspetto 'er', ho ottenuto: ",getMiddle3("paperino"));
console.log("Mi aspetto 'p', ho ottenuto: ",getMiddle3("pippo"));
console.log("Mi aspetto 'te', ho ottenuto: ",getMiddle3("architettura"));


//console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());