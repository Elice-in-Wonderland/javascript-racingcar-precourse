import { CAR } from '../constants';

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
    alert('자동차 이름을 쉼표로 구분해주세요.');
    return false;
  }

  if (!isValidCarNameLength(cars)) {
    alert('자동차 이름은 5자 이하로 작성해주세요.');
    return false;
  }

  if (!isValidUniqueCarName(cars)) {
    alert('자동차 이름은 중복되지 않게 작성해주세요.');
    return false;
  }

  return true;
}

export { isCarNamesValid };
