import Car from './Car';
import { CAR } from './constants';
import { getRandomNumber } from './utils';

class RacingCarGame {
  cars: Car[];

  constructor() {
    this.cars = [];
  }

  makeEachOfCar(carNameList: string[]) {
    this.cars = carNameList.map((carName) => new Car(carName));
  }

  start(count: number, renderStep: (car: Car) => void) {
    for (let i = 0; i < count; i += 1) {
      this.moveStep(this.cars, renderStep);
    }
  }

  moveStep(cars: Car[], renderStep: (car: Car) => void) {
    for (let i = 0; i < cars.length; i += 1) {
      const currentCar = cars[i];
      this.calculateMove(currentCar);
      renderStep(currentCar);
    }
  }

  calculateMove(car: Car) {
    if (
      getRandomNumber(
        CAR.RANGE_RANDOM_NUMBER.MIN,
        CAR.RANGE_RANDOM_NUMBER.MAX,
      ) >= CAR.RANGE_MOVABLE
    ) {
      car.move();
    }
  }

  finish(renderWinner: (winners: string) => void) {}
}

export default RacingCarGame;
