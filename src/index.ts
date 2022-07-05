import { INPUT_WRONG_MESSAGE } from "./constants";
import { variable } from "./variable";
import {
  btnAddEventListener,
  getInputValue,
  carNameOverMaxLength,
  inputWrong,
  clearResult,
  makeCar,
  MoveCar,
  printWinner,
  findWinner,
} from "./utils";

const getCarName = (variables: IVariables) => {
  btnAddEventListener("car-names-submit", () => {
    const carList = getInputValue("car-names-input").split(",");
    if (carNameOverMaxLength(carList)) {
      inputWrong(INPUT_WRONG_MESSAGE.inputOverMaxLength, "car-names-input");
    }
    variables.setCarList(carList);
  });
};

const getAttemptNumber = (variables: IVariables) => {
  btnAddEventListener("racing-count-submit", () => {
    variables.setAttemptNumber(parseInt(getInputValue("racing-count-input")));
    clearResult();
    playGame(variables);
  });
};

const startGame = () => {
  const variables = variable();
  getCarName(variables);
  getAttemptNumber(variables);
};

const playGame = (variables: IVariables) => {
  const carList = variables.getCarList();
  const attemptNumber = variables.getAttemptNumber();
  const cars = makeCar(carList);
  MoveCar(cars, attemptNumber);
  printWinner(findWinner(cars));
};

startGame();
