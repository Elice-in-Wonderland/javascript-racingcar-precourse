import { CAR_NAME_MAX_LENGTH, FORWARD_MOVEMENT_THRESHOLD } from "./constants";
import { Car } from "./car";
export const getInputValue = (inputId: string) => {
  const input = document.getElementById(inputId) as HTMLInputElement;
  return input.value;
};

export const btnAddEventListener = (btnId: string, callBack: () => void) => {
  const btn = document.getElementById(btnId);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    callBack();
  });
};

export const carNameOverMaxLength = (carList: Array<string>) => {
  return carList.filter((car) => car.length > CAR_NAME_MAX_LENGTH).length === 0
    ? false
    : true;
};
export const inputInitialization = (inputId: string) => {
  const input = document.getElementById(inputId) as HTMLInputElement;
  input.value = "";
};

export const inputWrong = (alertMassage: string, inputId: string) => {
  alert(alertMassage);
  inputInitialization(inputId);
};

export const printResult = (carName: string, moveNumber: number) => {
  let bar = "-".repeat(moveNumber);
  return `<div>${carName}: ${bar}</div>`;
};

export const randomNumber = () => {
  const random = MissionUtils.Random.pickNumberInRange(0, 9);
  return random;
};

export const forwardMovement = (randomNumber: number) => {
  if (randomNumber >= FORWARD_MOVEMENT_THRESHOLD) {
    return true;
  }
  return false;
};

export const MoveCar = (cars: Array<ICar>, attemptNumber: number) => {
  const result = document.getElementById("racing-result");
  const parent = document.getElementById("app");
  let resultDiv = document.createElement("div");
  resultDiv.setAttribute("id", "racing-score");
  for (let i = 0; i < attemptNumber; i += 1) {
    cars.forEach((car: any, idx: number) => {
      resultDiv.innerHTML += printResult(car.getName(), car.moveNumber());
      if (idx === cars.length - 1) {
        resultDiv.innerHTML += `<br/>`;
      }
    });
  }
  parent.insertBefore(resultDiv, result);
};
export const makeCar = (carList: Array<string>) => {
  return carList.map((car) => new Car(car));
};
export const clearResult = () => {
  const racingScore = document.getElementById("racing-score");
  if (racingScore) {
    racingScore.remove();
  }
};
