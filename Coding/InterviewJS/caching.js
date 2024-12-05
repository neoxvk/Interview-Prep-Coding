const myMemoized = (fn) => {
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(this, ...args)
        }
         return res[argsCache];
    }

   

}



const clumsyCalculation = (num1, num2) => {
    for(let i=1; i<100000000; i++){}
    return num1 * num2;
}

const memoized = myMemoized(clumsyCalculation)

console.log("First call..")
console.log(memoized(9647, 7649));
console.log("first call")


console.log("Second call..");
console.log(memoized(9647, 7649));
console.log("second call");