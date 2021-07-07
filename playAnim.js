import {
     COMPARE_COLOR,
     DEFAULT_COLOR,
     SWAP_COLOR,
     INPLACE_COLOR,
} from "./main.js";
var x;
export function getInterval() {
     return x;
}
export function playAnimation(elements, anims, ANIMATION_SPEED) {
     let counter = 0;
     if (anims.length === 0) return;
     x = setInterval(() => {
          let currAnim = anims[counter];
          switch (currAnim.type) {
               case "changeColor":
                    if (currAnim.a != -1)
                         elements[currAnim.a].style.backgroundColor =
                              COMPARE_COLOR;
                    if (currAnim.b != -1)
                         elements[currAnim.b].style.backgroundColor =
                              COMPARE_COLOR;
                    break;
               case "reverseColor":
                    if (currAnim.a != -1)
                         elements[currAnim.a].style.backgroundColor =
                              DEFAULT_COLOR;
                    if (currAnim.b != -1)
                         elements[currAnim.b].style.backgroundColor =
                              DEFAULT_COLOR;
                    break;
               case "swap":
                    let temp = elements[currAnim.a].style.height;
                    elements[currAnim.a].style.height = `${
                         elements[currAnim.b].style.height
                    }`;
                    elements[currAnim.b].style.height = `${temp}`;
                    elements[currAnim.a].style.backgroundColor = SWAP_COLOR;
                    elements[currAnim.b].style.backgroundColor = SWAP_COLOR;
                    break;
               case "inOrder":
                    elements[currAnim.a].style.backgroundColor = INPLACE_COLOR;
                    break;
               case "flashColor":
                    elements[currAnim.a].style.backgroundColor = SWAP_COLOR;
                    break;
               case "reverseColorSingle":
                    elements[currAnim.a].style.backgroundColor = DEFAULT_COLOR;
                    break;
               case "putInPlace":
                    break;
               case "finish":
                    clearInterval(x);
                    for (let i = 0; i < elements.length; i++) {
                         elements[i].style.backgroundColor = "blue";
                    }
                    break;
          }

          counter++;
          if (counter === anims.length) clearInterval(x);
     }, ANIMATION_SPEED);
}
