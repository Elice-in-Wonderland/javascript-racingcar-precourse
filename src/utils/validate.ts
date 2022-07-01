import { CAR, ERROR_MESSAGE } from '../constants';

function isValidCarNameByComma(cars: string[]) {
  // 최소한 두명이 있어야 경기가 진행되기 때문에
  return cars.length > 1;
}

function isValidCarNameLength(cars: string[]) {
  return cars.every((car) => car.length <= CAR.NAME_LENGTH);
}

function isValidUniqueCarName(cars: string[]) {
  const uniqueCarSet = new Set();

  for (let i = 0; i < cars.length; i += 1) {
    uniqueCarSet.add(cars[i]);
  }

  return cars.length === uniqueCarSet.size;
}

function isCarNamesValid(carNames: string) {
  const cars = carNames.split(',').map((car) => car.trim());
  // debugger;

  if (!isValidCarNameByComma(cars)) {
    alert(ERROR_MESSAGE.CAR_NAME_COMMA);
    return false;
  }

  if (!isValidCarNameLength(cars)) {
    alert(ERROR_MESSAGE.CAR_NAME_LENGTH);
    return false;
  }

  if (!isValidUniqueCarName(cars)) {
    alert(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    return false;
  }

  return true;
}

export { isCarNamesValid };
