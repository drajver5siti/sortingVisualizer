import { Animation } from './animationClass.js';

let globalArray;
export function setGlobalArray(arr){
     globalArray = [...arr];
};


export function mergeSort(Arr, animations) {
     let n = Arr.length;
     if (n < 2) return;

     let mid = Math.floor(n / 2);
     let left = [];
     let right = [];
     left = Arr.slice(0, mid);
     right = Arr.slice(mid, n);
     
     mergeSort(left, animations); 
     mergeSort(right, animations);

     Merge(left, right, Arr, animations);
}

function Merge(left, right, Arr,animations) {
     let nL = left.length;
     let nR = right.length;
     let i = 0;
     let j = 0;
     let k = 0;
     while (i < nL && j < nR) {
          let compVal1 = getIndexInArray(left[i], globalArray);
          let compVal2 = getIndexInArray(right[j], globalArray);
          
          if (left[i] <= right[j]) {
               Arr[k] = left[i];
               k++;
               i++;
          } 
          else {
               Arr[k] = right[j];
               k++;
               j++;
          }
     }




     // appending the rest
     if (i === nL) {
          while (j < nR) {
               Arr[k] = right[j];
               k++;
               j++;
          }
     }
     else {
          while (i < nL) {
               Arr[k] = left[i];
               k++;
               i++;
          }
     }
}

function getIndexInArray(number, arr) {
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] === number) return i;
     }
}
