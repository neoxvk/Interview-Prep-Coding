// A program to find first non-repeated character 
// example "vivek" output : "i"

//We can use frequency map or Hash map to count the occurances of each characte, then iterate over the string to find first character

const NonRepeatedCharacter = (str) => {
   const charCount = {}

   //count the occurances of each character
   for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1
    
   }

   //Find the first character with count of 1 which is non repeated
   for(let char of str){
     // If asked for the first repeated character, then compare it like if  if(charCount[char] > 1
     if (charCount[char] === 1) {
       return char;
     }
   }

   return null; // iF no-non repeated char found

}
const output = NonRepeatedCharacter("vivek")
console.log(output)




// Using Queue or LinkedList to track characters, only stores the first occurances, removes repetation

const firstNonRepeatedChar = (s) => {
    const queue = []
    const checked = new Set();

    for(let char of s){
        if(!checked.has(char)){
            queue.push(char);
            checked.add(char)
        }else{
            //If character is repeated, we need to remove it from the queue
            const index = queue.indexOf(char);
            if(index !== -1){
                queue.splice(index, 1)
            }
        }
    }

    return queue[0] || null

}


const result = firstNonRepeatedChar("vivek")
console.log("Using Queue", result)