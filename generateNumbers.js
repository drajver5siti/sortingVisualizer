import { elements } from "./main.js";

export function generateNumbers(board, array, NUMBERS) {
     console.log("generate numbers");
     board.innerHTML = "";
     array.length = 0;
     for (let i = 0; i < NUMBERS; i++) {
          let number = getRandomNum(); // i dont want to have same numbers beacause this will cause problems in the MergeSort because of the way i implemented the animations
          if (!array.includes(number)) {
               array.push(number);
               let element = document.createElement("div");
               element.classList.add("element");
               element.style.height = `${array[i] * 7}px`;
               element.style.width = `${Math.floor(
                    visualViewport.width / NUMBERS
               )}px`;
               // element.innerHTML = `${number}`;
               element.style.color = "black";
               element.style.fontSize = "20pt";
               board.appendChild(element);
          } else {
               i--;
          }
          // array.push(Math.floor(Math.random() * 70 + 1));
     }
     console.log("END");
}

function getRandomNum() {
     return Math.floor(Math.random() * 70 + 1);
}
