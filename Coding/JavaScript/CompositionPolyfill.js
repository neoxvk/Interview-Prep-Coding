const addFive = (a) => {
    return a+5
}

const subtractTwo = (a) => {
    return a-2;
}

const multiplyFour = (a) => {
    return a * 4;
}


const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn)=> fn(arg), args)
    }
}
const evaluate = compose(addFive, subtractTwo, multiplyFour)
console.log(evaluate(5))