const checkPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false; 
    }
    start++;
    end--;
  }

  return true; 
};


const result = checkPalindrome("jalaj");
console.log(result); 


//Or else we can also check the strings by reversing it. This will be easy peasy

const isPallindrome = (s) => {
    const tmpString =  s.split('').reverse().join('');
    return tmpString === s;
}

console.log(isPallindrome("buhah")); 
console.log(isPallindrome("recer"));
