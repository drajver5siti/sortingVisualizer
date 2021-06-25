import { Animation } from "./animationClass.js";

var globalArray = [];
let flag = false;
let counter = 0;
export function mergeSort(Arr, animations) // this function splits the arrays into smaller pieces and calls a second function that compares and merges them
{
    if(!flag)
    {
        globalArray = [...Arr];
        flag = true;
    }
    let n = Arr.length;
    let mid = Math.floor(n/2);
    if(n < 2) return;
    let left = [];
    let right = [];
    // splitting the array into two parts
    for( let i = 0; i<mid;i++) // left side of the array
    {
        left[i] = Arr[i]; 
    }
    for( let i = mid; i < n; i++)
    {
        right[i - mid]  = Arr[i]; // right side of the array;
    }
    mergeSort(left, animations);    // splitting the left side recursivly
    mergeSort(right, animations);  // splitting the right side recursivly
    // when the arrays reach to be size of 1 the function will return and will start merging them back
    Merge(left, right, Arr, mid, animations);
    counter++;
}

function Merge(left, right, Arr, mid, animations) // this function compares the smaller pieces, sees which one is smaller and appends the smaller one into the big array
{
    console.log(`Merge ${left} and ${right}`)
    let nL = left.length;
    let nR = right.length;
    let i = 0;
    let j = 0;
    let k = 0;
    // i have 2 smaller arrays that need to be merged into one, at the first call of this function i will have 2 arrays of size 1.
    while( i<nL && j<nR)
    {
        let compareValue1 = getIndexInArray(left[i],globalArray);
        let compareValue2 = getIndexInArray(right[j], globalArray);
        animations.push(new Animation('changeColor', compareValue1, compareValue2));     
        animations.push(new Animation('reverseColor', compareValue1, compareValue2));
        // console.log(`Comparing at index ${getIndexInArray(left[i], globalArray)} and ${getIndexInArray(right[j], globalArray)}`);
        // console.log(`Comparing values ${left[i]} and ${right[j]}`);

        if(left[i] <= right[j]) // the element from the left array is smaller so it will be appended to the merged array
        {
            // animations.push(new Animation('swap', k, compareValue1));
            Arr[k] = left[i];
            k++; // this is the counter for the big array
            i++; // this is the counter for the left array
        }
        else // this means the element from the right array is bigger and he will be appended to the big array, these counters allow us to ignore the previous elements that have been already added
        {
            // animations.push(new Animation('swap', k, compareValue2));
            Arr[k] = right[j];
            k++;
            j++;
        }
    }
    // we exit the while loop when we go trough all of the elements of one array, now the element of the second arry will just be appended to the big array
    if( i === nL)
    {
        // this means we went trough all the elements of the left array so append the right array
        while(j<nR)
        {
            // animations.push(new Animation('swapB', k, getIndexInArray(right[j], globalArray)));
            Arr[k] = right[j];
            k++;
            j++;
        }
    }
    else // this means we went trough all the elements of the rigth array so append the left array
    {
        while (i<nL)
        {
            // animations.push(new Animation('swapB', k, getIndexInArray(left[i], globalArray)));
            Arr[k]= left[i];
            k++;
            i++;
        }
    }
}

function getIndexInArray(number, arr)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] === number)
            return i;
    }
}