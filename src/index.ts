import { INPUT_WRONG_MESSAGE } from "./constants";
import { variable } from "./variable";
import {
  btnAddEventListener,
  getInputValue,
  carNameOverMaxLength,
  inputWrong,
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
  });
};

const startGame = () => {
  const variables = variable();
  getCarName(variables);
  getAttemptNumber(variables);
};

startGame();
