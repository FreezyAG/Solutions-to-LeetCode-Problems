var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) return false;
    
    let revertedNumber = 0;
    let num = x;
    while (num > revertedNumber) {
        revertedNumber = revertedNumber * 10 + num % 10;
        num = parseInt(num/10);
    }
    
    return (num === revertedNumber || num === parseInt(revertedNumber/10));
 };