export default class Game {
  constructor() {
    this.gameField = document.querySelector(".game-field");
    this.resultField = document.querySelector(".result");
    this.winTable = document.querySelector(".win-count");
    this.loseTable = document.querySelector(".lose-count");
    this.winCounter = 0;
    this.loseCounter = 0;
  }

  game() {
    this.gameField.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target.className === "goblin") {
        this.winCounter += 1;
        this.winTable.textContent = this.winCounter;
        if (this.winCounter >= 5) {
          this.resultField.className = "result result-win";
          this.resultField.textContent = "Ура! Ты победил!";
          this.winCounter = 0;
          this.loseCounter = 0;
          this.winTable.textContent = this.winCounter;
          this.loseTable.textContent = this.loseCounter;
        }
      } else {
        this.loseCounter += 1;
        this.loseTable.textContent = this.loseCounter;
        if (this.loseCounter >= 5) {
          this.resultField.className = "result result-lose";
          this.resultField.textContent = "Ой, ты проиграл :(";
          this.winCounter = 0;
          this.loseCounter = 0;
          this.winTable.textContent = this.winCounter;
          this.loseTable.textContent = this.loseCounter;
        }
      }
      if (this.winCounter === 1 || this.loseCounter === 1) {
        this.resultField.textContent = "";
      }
    });
  }
}
