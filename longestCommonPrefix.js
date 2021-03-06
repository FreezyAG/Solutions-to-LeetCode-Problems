var longestCommonPrefix = function(strs) {
    let prefix = ''
    let candidateChar
    let firstWord = strs.pop()
    let i = 0
    while(firstWord && i<=firstWord.length){
        candidateChar = firstWord[i] || ""
        for(let word of strs){
            if(candidateChar !== word[i]){
                return prefix
            } 
        }
        prefix+=candidateChar
        i++
    }
    return prefix
  }