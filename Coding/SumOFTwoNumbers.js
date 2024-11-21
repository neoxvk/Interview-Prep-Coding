//Sum of twoo numbers in an array

//Sum of two numbers by indexes
const SumOFTwoNumbers = (arr, n1, n2) => {
    let num1 = arr[n1];
    let num2 = arr[n2];

    let sum = num1 + num2;
    return sum;

}

const output = SumOFTwoNumbers([1,2,3,4,5], 0, 2)
console.log(output)


//Sum of two numbers by target Example: target = 9, o/p: [3, 4]
//Traditional way or BruteForce: Time complexity will be O(n^2), space complexity O(1)

let findTwoSum = (arr, target) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]+ arr[j] === target)
                return [i, j]
        }
    }
    return []

}

const result1 = findTwoSum([1,3,4,6], 9)
console.log(result1)


//With HashMap
const twoSum = (arr, target) => {
    const map ={}
    for(let i=0; i<arr.length; i++){
        const complement = target - arr[i];

        if(map[complement] !== undefined){
            return [map[complement], i]
        }
        map[arr[i]] = i
    }
    return [];
}

console.log(twoSum([2,6,9], 8))



