export default class Goblin {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("goblin");
    this.targetId = this.defineRandomId();
    this.moveToCell(this.targetId);
  }

  defineRandomId() {
    return Math.floor(Math.random() * 16) + 1;
  }

  moveToRandomCell() {
    let currentCell = this.element.parentElement;
    let currentId = currentCell.id;
    while (currentId == this.targetId) {
      this.targetId = this.defineRandomId();
    }
    currentCell.firstChild.remove();
    this.moveToCell(this.targetId);
  }

  moveToCell(cellId) {
    let targetCell = document.getElementById(cellId);
    targetCell.appendChild(this.element);
  }
}
