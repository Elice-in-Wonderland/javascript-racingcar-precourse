import Car from './Car';
import { SELECTOR } from './constants';
import ResultView from './ResultView';
import { $, formDataToObject, isCarNamesValid } from './utils';

class RacingCarGame {
  cars: Car[];

  resultView: ResultView;

  constructor(resultView: ResultView) {
    this.resultView = resultView;
    this.cars = [];
    this.initialize();
    this.addEventHandler();
  }

  initialize() {
    ($(SELECTOR.CAR_NAMES_INPUT) as HTMLInputElement).value = '';
    ($(SELECTOR.RACING_COUNT_INPUT) as HTMLInputElement).value = '';
  }

  addEventHandler() {
    ($(SELECTOR.CAR_NAMES_FORM) as HTMLFormElement).addEventListener(
      'submit',
      this.handleCarNamesSubmit,
    );

    ($(SELECTOR.RACING_COUNT_FORM) as HTMLFormElement).addEventListener(
      'submit',
      this.handleRacingCountSubmit,
    );
  }

  handleCarNamesSubmit(e: SubmitEvent) {
    e.preventDefault();
    const { carNames } = formDataToObject(
      new FormData(e.target as HTMLFormElement),
    );

    const result = isCarNamesValid(carNames);
  }

  handleRacingCountSubmit(e: SubmitEvent) {
    e.preventDefault();
    debugger;
    const { racingCount } = formDataToObject(
      new FormData(e.target as HTMLFormElement),
    );
  }
}

export default RacingCarGame;
