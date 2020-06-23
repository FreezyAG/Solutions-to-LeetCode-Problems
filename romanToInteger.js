var romanToInt = function(s) {
    let key = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let romanArray = s.split('')
    // console.log(romanArray);
    let result = 0;
    
    for (let i = 0; i < romanArray.length; i++) {
        if (i + 1 !== romanArray.length && key[romanArray[i] ] < key[romanArray[i + 1]]) {
            result = result - key[romanArray[i] ]
        } else {
            result = result + key[romanArray[i] ]
        }
    }
    // alternative
    // for (let i = 0; i < romanArray.length; i++) {
    //     if (i + 1 === romanArray.length ) {
    //         result = result + key[romanArray[i] ]
    //     } else if (key[romanArray[i] ] >= key[romanArray[i + 1]]) {
    //         result = result + key[romanArray[i] ]
    //     } else {
    //         result = result - key[romanArray[i] ]
    //     }
    // }
    console.log( result );
};

romanToInt("IV")