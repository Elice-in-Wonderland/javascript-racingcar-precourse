import Car from "./components/Car";
import RacingGame from "./components/RacingGame";

const racingGame = new RacingGame();
const createCarBtn = document.querySelector(
  "#car-names-submit"
) as HTMLButtonElement;

createCarBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("#car-names-input") as HTMLInputElement;
  const value = input.value.split(",");
  racingGame.createCars(value.map((name) => new Car({ name })));
  console.log(racingGame);
});
