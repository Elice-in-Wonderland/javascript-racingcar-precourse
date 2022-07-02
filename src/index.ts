import Car from "./components/Car";
import RacingGame from "./components/RacingGame";

const racingGame = new RacingGame();
const createCarBtn = document.querySelector(
  "#car-names-submit"
) as HTMLButtonElement;
const startGameBtn = document.querySelector(
  "#racing-count-submit"
) as HTMLButtonElement;
const racingResult = document.querySelector("#racing-result") as HTMLElement;
const racingWinner = document.querySelector(
  "#racing-winners"
) as HTMLSpanElement;

createCarBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("#car-names-input") as HTMLInputElement;
  const value = input.value.split(",");
  racingGame.createCars(value.map((name) => new Car({ name })));
});

startGameBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector(
    "#racing-count-input"
  ) as HTMLInputElement;
  racingGame.startGame(Number(input.value), racingResult);
  racingGame.paintWinner(racingWinner);
});
