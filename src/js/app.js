// // TODO: write code here

// // comment this to pass build
// const unusedVariable = "variable";

// // for demonstration purpose only
// export default function demo(value) {
//   return `Demo: ${value}`;
// }

// console.log("app.js included");

import Goblin from "./goblin";

document.addEventListener("DOMContentLoaded", () => {
  const goblin = new Goblin();

  let targetId = Math.floor(Math.random() * 16) + 1;
  // console.log(targetId)
  goblin.moveToCell(targetId);

  setInterval(() => {
    let currentCell = document.querySelector(".goblin").parentElement;
    let currentId = currentCell.id;
    // console.log(currentCell.children)
    // console.log(currentId)
    while (currentId == targetId) {
      targetId = Math.floor(Math.random() * 16) + 1;
      // console.log(targetId)
    }
    currentCell.firstChild.remove();
    goblin.moveToCell(targetId);
  }, 2000);
});
