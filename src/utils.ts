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
export const forwardMovement = (randomNumber: number) => {
  if (randomNumber >= FORWARD_MOVEMENT_THRESHOLD) {
    return true;
  }
  return false;
};

