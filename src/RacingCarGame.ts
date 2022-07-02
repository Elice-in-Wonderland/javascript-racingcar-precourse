import Car from './Car';
import { CAR } from './constants';
import { getRandomNumber } from './utils';

export interface RenderStepProps {
  car: Car;
  options?: {
    last: boolean;
  };
}

type RenderStep = ({ car, options }: RenderStepProps) => void;

class RacingCarGame {
  cars: Car[];

  constructor() {
    this.cars = [];
  }

  makeEachOfCar(carNameList: string[]) {
    this.cars = carNameList.map((carName) => new Car(carName));
  }

  start(count: number, renderStep: RenderStep) {
    for (let i = 0; i < count; i += 1) {
      this.moveStep(this.cars, renderStep);
    }
  }

  moveStep(cars: Car[], renderStep: RenderStep) {
    const lastCar = cars[cars.length - 1];

    for (let i = 0; i < cars.length; i += 1) {
      const currentCar = cars[i];
      this.calculateMove(currentCar);
      renderStep({
        car: currentCar,
        options: { last: lastCar === currentCar },
      });
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

  calculateWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }
}

export default RacingCarGame;
