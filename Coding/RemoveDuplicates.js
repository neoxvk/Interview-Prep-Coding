
//Using 2 pointers
const removeDuplicates = (arr) => {
    arr.sort((a,b)=> a-b)
    if (arr.length === 0) return false;
    let key = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]!= arr[key]){
            key++;
            arr[key] = arr[j]
        }
    }


    return arr.slice(0, key+1)
}
const result = removeDuplicates([1,2,1,4,5,5,6])
console.log(result)



const findMissing = (arr) => {
    const uniqueSet = new Set(arr.sort())
    return [...uniqueSet]
}
const output = findMissing([1,4,6,2,1,2,3,5,6])
console.log("Using Set:", output)