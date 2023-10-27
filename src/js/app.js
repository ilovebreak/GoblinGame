import Goblin from "./goblin";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const goblin = new Goblin();
  const game = new Game();

  setInterval(() => {
    goblin.moveToRandomCell();
  }, 1000);
  game.game();
});
