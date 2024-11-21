// Merge two arrays without using extra space
{/* 
    Start fromthe end of two arrays
    Compare the largest unprocessed elements of both arrays
    Place the larger element at the end of first array
    Move all the elements from second array to first


    Steps: 
    1. Set up three pointers i => last element of array 1, j => last element of array 2, k => last available index in the merged array
    2. Iterate from the end of both the arrays, Place larger element at arr1[k] and move the pointer
        Move the k pointer to the left
    3. After the loop, if any elements remains in arr2, copy them to arr1
*/}

const mergeSortArraysInPlace = (arr1, arr2) => {
   let i = arr1.length -1;
   let j = arr2.length -1;
    let k = arr1.length + arr2.length - 1

    //Extend arr1 length just in case
    arr1.length = arr1.length + arr2.length

    //Merge the arrays from the end
    while (i >= 0 && j>=0){
        if(arr1[i] > arr2[j]){
            arr1[k--] = arr1[i--]
        }else{
            arr1[k--] = arr2[j--]
        }
    }

    while(j>=0){
        arr1[k--] = arr2[j--]
    }

    return arr1
}

const output = mergeSortArraysInPlace([1, 5, 9], [2, 6, 8])
console.log(output)