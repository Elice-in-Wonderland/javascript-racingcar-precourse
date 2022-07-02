import { CAR, ERROR_MESSAGE } from '../constants';

function isValidCarNamesByComma(cars: string[]) {
  // 최소한 두명이 있어야 경기가 진행되기 때문에
  return cars.length > 1;
}

function isValidCarNamesLength(cars: string[]) {
  return cars.every((car) => car.length <= CAR.NAME_LENGTH);
}

function isValidUniqueCarNames(cars: string[]) {
  const uniqueCarSet = new Set();

  for (let i = 0; i < cars.length; i += 1) {
    uniqueCarSet.add(cars[i]);
  }

  return cars.length === uniqueCarSet.size;
}

function isCarNamesValid(cars: string[]) {
  // debugger;

  if (!isValidCarNamesByComma(cars)) {
    alert(ERROR_MESSAGE.CAR_NAME_COMMA);
    return false;
  }

  if (!isValidCarNamesLength(cars)) {
    alert(ERROR_MESSAGE.CAR_NAME_LENGTH);
    return false;
  }

  if (!isValidUniqueCarNames(cars)) {
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
