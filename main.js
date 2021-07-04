import { generateNumbers } from "./generateNumbers.js";
import { Button } from "./buttonClass.js";
import { bubbleSort } from "./bubbleSort.js";
import { getInterval, playAnimation } from './playAnim.js';
import { selectionSort } from "./selectionSort.js";
import { mergeSort } from "./mergeSort.js";
const generateNewArrayBTN = new Button(document.getElementById('generateNewArrayBTN'));
const bubbleSortBTN = new Button (document.getElementById('bubbleSortBTN'));
const selectionSortBTN = new Button ( document.getElementById('selectionSortBTN'));
const mergeSortBTN = new Button( document.getElementById('mergeSortBTN'));
const arraySizeSlider = document.getElementById('numbersLength');
const animLengthSlider = document.getElementById('animSpeed');
export let ANIMATION_SPEED = animLengthSlider.value;
export let NUMBERS = arraySizeSlider.value; // how many numbers cannot be greater than 500 
export const board = document.getElementById('board');
export const array = [];
export const elements = document.getElementsByClassName('element');    // divs that can be edited
export let animations = []; // animations


//   COLORS CAN BE EDITED
export const COMPARE_COLOR = 'orange';
export const SWAP_COLOR = 'green';
export const DEFAULT_COLOR = 'turquoise';
export const INPLACE_COLOR = 'blue';

generateNumbers(board, array, NUMBERS); // rendering the fist set of numbers

// adding the ui functionality
animLengthSlider.oninput = ()=>{
    ANIMATION_SPEED = animLengthSlider.value;
}
arraySizeSlider.oninput = ()=>{
    NUMBERS = arraySizeSlider.value;
    generateNumbers(board, array, NUMBERS)
    clearInterval(getInterval());
    bubbleSortBTN.clicked = false;
    selectionSortBTN.clicked = false;
    mergeSortBTN.clicked = false;
}
// EVENT LISTENERS FOR THE BUTTONS
generateNewArrayBTN.id.addEventListener('click', e=>{
    generateNumbers(board, array, NUMBERS);
    // console.log(array)
    clearInterval(getInterval());
    bubbleSortBTN.clicked = false;
    selectionSortBTN.clicked = false;
    mergeSortBTN.clicked = false;
});
bubbleSortBTN.id.addEventListener('click', e=>{
    if(!bubbleSortBTN.clicked && !selectionSortBTN.clicked && !mergeSortBTN.clicked)
    {
        bubbleSort(array, animations); // sorts the array and gives me the animations
        playAnimation(elements, animations, ANIMATION_SPEED);
        bubbleSortBTN.clicked = true;
    }
});

selectionSortBTN.id.addEventListener('click', e=>{
    if(!bubbleSortBTN.clicked && !selectionSortBTN.clicked && !mergeSortBTN.clicked)
    {
        selectionSort(array, animations); // sorts the array and gives me the animations
        playAnimation(elements, animations, ANIMATION_SPEED);
        selectionSortBTN.clicked = true;
    }
});
mergeSortBTN.id.addEventListener('click', e=>{
    if(!bubbleSortBTN.clicked && !selectionSortBTN.clicked && !mergeSortBTN.clicked)
    {
        animations.length = 0;
        console.log(`Original array ${array}`);
        mergeSort(array, animations); // sorts the array and gives me the animations
        console.log(animations);
        playAnimation(elements, animations, ANIMATION_SPEED);
        mergeSortBTN.clicked = true;
        console.log(`Sorted by merge sort ${array}`);
    }
});