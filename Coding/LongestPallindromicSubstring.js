// Longest pallindromic string in the given string 
// Example :  "babad" , output: "bab" or "aba"




//Helper function to expand around center
  // It takes two args left and right, tried eto expand outside from center, if substring is pallindrome

  const expandArounfCenter = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      //move left pointer leftwards
      left--;
      //move right pointer rightwards
      right++;
    }
    return right - left - 1;
  };


const LongestPallindromicSubString = (str) => {
  if (str.length === 0) return "";

  let start = 0;
    let end = 0;

  

  //Loop through each character in a string to check for pallindromes
  for (let i = 0; i < str.length; i++) {
    //Check for odd-length pallindromes (single character center)
    let oddLen = expandArounfCenter(str,i, i);

    //Check for even-length pallindromes ( pair character center)
    let evenLen = expandArounfCenter(str, i, i + 1);

    //Get maximum length between both expansions
    let len = Math.max(oddLen, evenLen);

    //Update the start and end indices if pallindrome is longer
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  //return the longest pallindrome
  return str.substring(start, end + 1);
}

const output = LongestPallindromicSubString("vivek")
console.log(output)