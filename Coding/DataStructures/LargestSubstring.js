// Write a function to find the largest substring without repeating characters.

function largestSubString(s){

    let start = 0, maxLength = 0;
    let characterSet = new Set();

    for(let end=0; end<s.length; end++){
        while(characterSet.has(s[end])){
            characterSet.delete(s[end])
            start++;
        }
        characterSet.add(s[end])
        maxLength = Math.max(maxLength, end-start+1)

    }
    return maxLength

}

let result = largestSubString("viiveekk")
console.log(result)