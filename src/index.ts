import Car from "./components/Car";
import RacingGame from "./components/RacingGame";
import { isValidName } from "./utils/index";

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
  const names = input.value.split(",");
  if (isValidName(names))
    racingGame.createCars(names.map((name) => new Car({ name })));
  else alert("5글자 이하 이름만 가능합니다.");
});

startGameBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector(
    "#racing-count-input"
  ) as HTMLInputElement;
  const count = Number(input.value);
  if (count === 0) {
    alert("0 이외의 숫자만 입력해주세요.");
  } else {
    racingGame.startGame(count, racingResult);
    racingGame.paintWinner(racingWinner);
  }
});
