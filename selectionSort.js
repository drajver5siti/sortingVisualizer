import { Animation } from "./animationClass.js";


// comparing two 
// setting the min element
// swaping the min element to the front
export function selectionSort(inputArr, animations) { 
    let counter = 0;
    let n = inputArr.length;        
    animations.length = 0;

    // flash the color of the fist element, because by default the first element is the minimum at the start
    animations.push(new Animation('flashColor', 0));
    animations.push(new Animation('reverseColorSingle', 0));
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            animations.push(new Animation('changeColor', min, j));  // comparing
            animations.push(new Animation('reverseColor', min, j)); // end of comparasion
            if(inputArr[j] < inputArr[min]) {
                min=j; 
                // flash the new min
                animations.push(new Animation('flashColor', min));
                animations.push(new Animation('reverseColorSingle', min));

            }
         }
         if (min != i) {
             // Swapping the elements
             animations.push( new Animation('swap', counter, min)); // swaping the fist element with the min
             animations.push( new Animation('reverseColorSingle',min)); // reverse the color back on the min element ( we reverse the color back where the min element WAS).
             animations.push( new Animation('inOrder', counter++)); 
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        else
        {
            // the first element is the smallest one ( its already in place)
            animations.push( new Animation('inOrder', counter++));  
        }
    }

}