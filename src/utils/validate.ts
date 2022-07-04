import { CAR, ERROR_MESSAGE } from '../constants';

function isValidCarNamesByComma(carNames: string[]) {
  // 최소한 두명이 있어야 경기가 진행되기 때문에
  return carNames.length > 1;
}

function isValidCarNamesLength(carNames: string[]) {
  return carNames.every(
    (carName) =>
      carName.length >= CAR.NAME_LENGTH.MIN &&
      carName.length <= CAR.NAME_LENGTH.MAX,
  );
}

function isValidUniqueCarNames(carNames: string[]) {
  return carNames.length === new Set(carNames).size;
}

function isCarNamesValid(carNames: string[]) {
  // debugger;

  if (!isValidCarNamesByComma(carNames)) {
    alert(ERROR_MESSAGE.CAR_NAME_COMMA);
    return false;
  }

  if (!isValidCarNamesLength(carNames)) {
    alert(ERROR_MESSAGE.CAR_NAME_LENGTH);
    return false;
  }

  if (!isValidUniqueCarNames(carNames)) {
    alert(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    return false;
  }

  return true;
}

function isValidNaturalNumber(count: string) {
  return Number(count) > 0;
}

function isNonEmpty(count: string) {
  return count.length;
}

function isRacingCountValid(count: string) {
  if (!isNonEmpty(count)) {
    alert(ERROR_MESSAGE.RACING_COUNT_EMPTY);
    return false;
  }

  if (!isValidNaturalNumber(count)) {
    alert(ERROR_MESSAGE.RACING_COUNT_NON_NATURAL);
    return false;
  }

  return true;
}

export { isCarNamesValid, isRacingCountValid };
