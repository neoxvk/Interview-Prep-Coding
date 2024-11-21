// Reverse a string 
//For example string = "vivek" o/p will be : "keviv"

const ReverseAString = (s) => {
    return s.split('').reverse().join('')

}

const output = ReverseAString("vivek");
console.log(output)


// An optimized way with good time and space complexities

let optimizedReverse = (str) => {
    let charArray = [...str]
    let left = 0
    let right = charArray.length - 1

    while(left < right){
        // We need to swap left and right indices
        [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
        left++;
        right--;

    }
    return charArray.join('')

}
let optimized = optimizedReverse("vivek")
console.log(optimized)
