import {
  ERROR_MESSAGE,
  CAR_NAME_MIN_LENGTH,
  FORWARD_MIN_NUMBER,
} from '../constants';

type InputValueType = string | number;

const isNameLengthValid = (nameInputList: string[]): string[] => {
  nameInputList.map((name) => {
    if (name.length > CAR_NAME_MIN_LENGTH) {
      alert(ERROR_MESSAGE.NAME_LENGTH_INVALID);
    }
  });
  return nameInputList;
};

const isInputNotNull = (inputValue: InputValueType | undefined): boolean => {
  if (inputValue === undefined) {
    alert(ERROR_MESSAGE.INPUT_NULL);
    return false;
  }
  return true;
};

const isCarForward = (randomNumber: number): boolean => {
  if (randomNumber >= FORWARD_MIN_NUMBER) {
    return true;
  }
  return false;
};

const checkBothInputValid = (
  isNameInputValid: boolean,
  isCountInputValid: boolean,
): boolean => {
  if (!isNameInputValid) {
    alert(ERROR_MESSAGE.NAME_NOT_VALID);
    return false;
  } else if (!isCountInputValid) {
    alert(ERROR_MESSAGE.COUNT_NOT_VALID);
    return false;
  }
  return true;
};

export { isNameLengthValid, isInputNotNull, isCarForward, checkBothInputValid };
