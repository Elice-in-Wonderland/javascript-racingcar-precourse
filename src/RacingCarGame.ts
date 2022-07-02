import Car from './Car';
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

  // TODO: 매직넘버 처리
  calculateMove(car: Car) {
    // 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우
    if (getRandomNumber(0, 9) >= 4) car.move();
  }

  finish(renderWinner: (winners: string) => void) {}
}

export default RacingCarGame;
