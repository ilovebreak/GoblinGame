export default class Goblin {
  constructor() {}

  moveToCell(cellId) {
    let targetCell = document.getElementById(cellId);
    const goblin = document.createElement("div");
    goblin.classList.add("goblin");
    targetCell.appendChild(goblin);
  }
}
