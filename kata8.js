
//width è sempre dispari
//root è la width

//  3   
// 121  
// =7
 

//   5    
//  343   
// 12321  
// =24

//    7   
//   565   
//  34543  
// 1234321 
// =58

function mountainsOfHoiyama(width) {

    let startingNumber = 0;
    let actualWidth = width;
    let array = [];

    while (actualWidth > 0) {
        let actualNumber = startingNumber;

        for (let i = 0; i < actualWidth; i++) {
            if (i <= actualWidth/2 ) {
                actualNumber++;
            }else{
                actualNumber--;
            }
            array.push(actualNumber);
        }

        actualWidth = actualWidth - 2;
        startingNumber = startingNumber + 2;
    }
    return array.reduce((p,c) => p+c)
}

function mountainsOfHoiyama2(number) {
    return (width + 1) * (width ** 2 + 2 + width) / 8

    // 4 * (9 + 2 + 3) / 8
    // 4 * 14 /  8
    // 56 / 8 = 7


    // 6 * (25 + 2 + 5) / 8
    // 6 * 32 / 8
    // 192 / 8 = 24
}


console.log("Mi aspetto 7 ho ottenuto: ", mountainsOfHoiyama(3));
console.log("Mi aspetto 24 ho ottenuto: ", mountainsOfHoiyama(5));
console.log("Mi aspetto 58 ho ottenuto: ", mountainsOfHoiyama(20000));
