//[1,2,3,4,5,6,7] =>rotate at index 3 => [4,5,6,7,1,2,3]
//Given a rotated sorted array, write a function to find the target element's index
// Will implement with Binary Search tree. Will check if the target is in first halve or second halve.

const search = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        const mid = Math.floor((left+right)/2)

        //Check if the target is the mid
        if(arr[mid] === target){
            return mid;
        }

        //See which side is sorted
        if(arr[left] < arr[mid]) {
            //Left side is sorted
            if(target >= arr[left] && target<= arr[mid]){
                right = mid-1;
                //Target is in the left side

            }else{
                left = mid + 1;
                //Target is in the right side
            }
        }else{
            //Right side is sorted
            if(target > arr[mid] && target <= arr[right]){
                left = mid +1;
                //Target is in the right half
            }else{
                right = mid -1;
                //Target is in the left half
            }
        }
    }

    return -1;
}
const output2 = search([4, 5, 1, 2, 3], 5);
const output1 = search([4,5,6,7,1,2,3], 2)

console.log(output2);
console.log(output1)
