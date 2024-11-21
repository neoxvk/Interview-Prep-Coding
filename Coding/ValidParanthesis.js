//Check if every opening paranthsis has corresponding closing paranthesis


//we can use stack, it follows LIFO
const validParantheses = (str) => {

    const stack = []
    const matchingBrackets =  {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let char of str){
        //if it's a closing parantheses check top of the stack
        if (matchingBrackets[char]) {
          if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
            return false;
          }
        } else {
            //if it's an opening paratheses, push it to the stack
            stack.push(char)
        }

    }
    return stack.length === 0

}

const output = validParantheses("[]{}()")
const output2 = validParantheses("]{}()[");
console.log("output1:", output)
console.log("output2:", output2);
