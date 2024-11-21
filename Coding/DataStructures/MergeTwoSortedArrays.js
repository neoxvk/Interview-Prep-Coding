const MergeTwoSortedArrays = (arr1, arr2) => {
    arr1.sort((a,b)=> a-b);
    arr2.sort((a, b) => a - b);

    const r = [...arr1, ...arr2]

    const sortedArray = r.sort((a, b)=> a - b)

    return sortedArray

    

}
const output1 = MergeTwoSortedArrays([1,8,3], [2, 14,5,12])
console.log(output1)