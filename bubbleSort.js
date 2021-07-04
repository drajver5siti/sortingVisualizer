import { Animation } from './animationClass.js';
export function bubbleSort(array, animations) {
     let counter = array.length - 1;
     animations.length = 0;
     for (let i = 0; i < array.length; i++) {
          let swapped = false;
          for (let j = 0; j < array.length - i - 1; j++) {
               animations.push(new Animation('changeColor', j, j + 1));
               animations.push(new Animation('reverseColor', j, j + 1));

               if (array[j] > array[j + 1]) {
                    swapped = true;
                    animations.push(new Animation('swap', j, j + 1));
                    animations.push(new Animation('reverseColor', j, j + 1));
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
               }
          }
          animations.push(new Animation('inOrder', counter--)); // counter -- is keeping track of the biggest value that is not already in place, at the end of one cycle we know that the biggest value will be in place
          if (!swapped) {
               animations.push(new Animation('finish'));
          }
     }
}
