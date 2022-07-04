import { domSelector, domCreator } from '../utils/dom';
import Car from './car';
import { SELECTOR, CREATOR, STYLE } from '../constants/index';
import {
  carResultMaker,
  calculateMaxForward,
  findRacingWinners,
} from '../utils/resultMaker';

class GameResult {
  resultElement: HTMLDivElement;

  racingWinnersElement: HTMLSpanElement;

  racingWinners: string[];

  racingWinnersForward: number;

  constructor() {
    this.resultElement = domSelector(SELECTOR.RESULT) as HTMLDivElement;
    this.racingWinnersElement = domSelector(
      SELECTOR.RACING_WINNERS,
    ) as HTMLSpanElement;
    this.racingWinners = [];
    this.racingWinnersForward = 0;
  }

  createGameResultElement = (cars: Car[]): HTMLElement => {
    const newNode = domCreator(CREATOR.UL);
    newNode.style.padding = STYLE.PADDING;

    cars.map((car) => {
      const carNode = domCreator(CREATOR.LI);
      carNode.style.listStyle = STYLE.LIST_STYLE;
      carNode.innerHTML = carResultMaker(car);
      newNode.appendChild(carNode);
    });

    return newNode;
  };

  addGameResultElement = (newNode: HTMLElement) => {
    this.resultElement.appendChild(newNode);
  };

  addFinalResultElement = (cars: Car[]) => {
    this.racingWinnersForward = calculateMaxForward(
      cars,
      this.racingWinnersForward,
    );

    this.racingWinners = findRacingWinners(
      cars,
      this.racingWinnersForward,
      this.racingWinners,
    );

    this.racingWinnersElement.innerHTML = this.racingWinners.join(', ');
  };
}

export default GameResult;
