// CLOSURES
/*

    CLOSURE, is a function that remembers it's lexical scope, even when the function exected outside of the scope.
    Closure gives you access to variables from outer function.

    Closures are created whenever a function is defined inside another function

*/

//Counter example using closures

const createCounter = () => {
    let count = 0;
    //As it is let, it's block scoped : private variable

    return function(){
        count++;
        return count;
    }

}

const counter = createCounter()

console.log(counter());
console.log(counter());
console.log(counter());
