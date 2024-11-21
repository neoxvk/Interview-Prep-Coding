//Check if two strings are anagrams
//Anagram is when two strings has same characters and the same frequency

const isAnagram = (str1, str2) => {
    let tmp1 = str1.split('').sort().join()
    let tmp2 = str2.split('').sort().join()
    
    return tmp1 === tmp2 ? true : false

}
const result = isAnagram("mug", "gum") 
console.log(result)


//Method 2 : FREQUENCY COUNT

const frequencyCountAnagram = (s1, s2) => {
    let charCount = {} 
    if(s1.length !== s2.length) return false

    for(let char of s1){
        charCount[char] = (charCount[char] || 0) + 1
    }
    //Subtract the frequency map for the second string

    for(let char of s2){
        if(!charCount[char]) return false;
        charCount[char]--;
    }
    return true;

}
const output = frequencyCountAnagram("silent", "lisyten")
console.log("With frequency count", output)