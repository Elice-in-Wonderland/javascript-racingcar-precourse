import Car from './compoents/car';
import GameResult from './compoents/gameResult';
import nameMaker from './utils/nameMaker';
import randomNumberMaker from './utils/randomNumberMaker';
import { isCarForward, checkBothInputValid } from './utils/validation';

class RacingGame {
  nameInput: string;

  countInput: number;

  isNameInputValid: boolean;

  isCountInputValid: boolean;

  cars: Car[];

  randomNumbers: number[];

  constructor() {
    this.nameInput = '';
    this.countInput = 0;
    this.isNameInputValid = false;
    this.isCountInputValid = false;
    this.cars = [];
    this.randomNumbers = [];
  }

  start(gameResult: GameResult) {
    if (!checkBothInputValid(this.isNameInputValid, this.isCountInputValid))
      return;

    const carNames = nameMaker(this.nameInput);
    for (let i = 0; i < carNames.length; i++) {
      this.cars.push(new Car(carNames[i], 0));
    }

    for (let i = 0; i < this.countInput; i++) {
      this.cars.map((car) => {
        if (isCarForward(randomNumberMaker())) {
          car.setCarForward(car.getCarForward() + 1);
        }
      });
      const gameResultNode = gameResult.createGameResultElement(this.cars);
      gameResult.addGameResultElement(gameResultNode);
    }
    gameResult.addFinalResultElement(this.cars);
  }

  getNameInputValue(): string {
    return this.nameInput;
  }

  setNameInputValue(value: string) {
    this.nameInput = value;
  }

  getCountInputValue(): number {
    return this.countInput;
  }

  setCountInputValue(value: number) {
    this.countInput = value;
  }
}

export default RacingGame;
