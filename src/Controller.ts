import { SELECTOR } from './constants';
import RacingCarGame from './RacingCarGame';
import ResultView from './ResultView';
import {
  $,
  changeElementVisibility,
  formDataToObject,
  isCarNamesValid,
  isRacingCountValid,
} from './utils';

class Controller {
  game: RacingCarGame;

  resultView: ResultView;

  constructor(game: RacingCarGame, view: ResultView) {
    this.game = game;
    this.resultView = view;
    this.initialize();
    this.addEventHandler();
  }

  initialize() {
    ($(SELECTOR.CAR_NAMES_INPUT) as HTMLInputElement).value = '';
    ($(SELECTOR.RACING_COUNT_INPUT) as HTMLInputElement).value = '';

    changeElementVisibility($(SELECTOR.RACING_COUNT_HEADING), 'hidden');
    changeElementVisibility($(SELECTOR.RACING_COUNT_FORM), 'hidden');
  }

  addEventHandler() {
    ($(SELECTOR.CAR_NAMES_FORM) as HTMLFormElement).addEventListener(
      'submit',
      this.handleCarNamesSubmit.bind(this),
    );

    ($(SELECTOR.RACING_COUNT_FORM) as HTMLFormElement).addEventListener(
      'submit',
      this.handleRacingCountSubmit.bind(this),
    );
  }

  handleCarNamesSubmit(e: SubmitEvent) {
    e.preventDefault();
    const { carNames } = formDataToObject(
      new FormData(e.target as HTMLFormElement),
    );
    const carNameList = carNames.split(',').map((car) => car.trim());
    if (!isCarNamesValid(carNameList)) return;

    this.game.makeEachOfCar(carNameList);
    changeElementVisibility($(SELECTOR.RACING_COUNT_HEADING), 'visible');
    changeElementVisibility($(SELECTOR.RACING_COUNT_FORM), 'visible');
  }

  handleRacingCountSubmit(e: SubmitEvent) {
    e.preventDefault();
    const { racingCount } = formDataToObject(
      new FormData(e.target as HTMLFormElement),
    );
    if (!isRacingCountValid(racingCount)) return;

    this.resultView.visible();
    this.game.start(
      Number(racingCount),
      this.resultView.renderStep.bind(this.resultView),
    );
    // TODO: 우승자 결정 및 출력
  }
}

export default Controller;
