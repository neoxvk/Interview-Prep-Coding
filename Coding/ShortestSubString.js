// Write a function to find the shortest substring without repeating characters.

function shortestSubstring(s){
    let start=0;
    let minLength = Infinity;
    let uniqueChars = new Set();

    for(let end=0; end<s.length; end++){
        while(uniqueChars.has(s[end])){
            uniqueChars.delete(s[end])
            start++
        }
        uniqueChars.add(s[end]);
    
        if(uniqueChars.size === end-start+1){
            minLength = Math.min(minLength, end-start+1)
        }

       
    }
     return minLength === Infinity ? 0 : minLength;


  

}
const result = shortestSubstring("vivekk")
console.log(result)