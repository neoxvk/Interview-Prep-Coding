// find missing in an array from 1 to n
//arr: [1,2, 4, 5] o/p: missing = 3

//we can find it by using expected sum minus actual sum
const findMissingNumber = (arr) => {
    const n = Math.max(...arr)
    const expectedSum = (n * (n + 1))/ 2
    const actualSum =  arr.reduce((sum,acc)=> sum+acc, 0)
  
    return expectedSum - actualSum


}
const output = findMissingNumber([1,2,3, 5,6])
console.log(output)