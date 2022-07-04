import RacingGame from './racingGame';
import GameResult from './compoents/gameResult';
import { domSelector, addEventListenerToTarget } from './utils/dom';
import nameMaker from './utils/nameMaker';
import { isInputNotNull, isNameLengthValid } from './utils/validation';
import { SELECTOR, EVENT_TYPE } from './constants';

class Controller {
  racingGame: RacingGame;

  gameResult: GameResult;

  constructor(racingGame: RacingGame, gameResult: GameResult) {
    this.racingGame = racingGame;
    this.gameResult = gameResult;
    this.addEvent();
  }

  addEvent() {
    addEventListenerToTarget(
      domSelector(SELECTOR.CAR_NAMES_INPUT),
      EVENT_TYPE.INPUT,
      this.handleNameInput.bind(this),
    );
    addEventListenerToTarget(
      domSelector(SELECTOR.CAR_NAMES_SUBMIT),
      EVENT_TYPE.CLICK,
      this.handleNameSubmit.bind(this),
    );
    addEventListenerToTarget(
      domSelector(SELECTOR.RACING_COUNT_INPIT),
      EVENT_TYPE.INPUT,
      this.handleCountInput.bind(this),
    );
    addEventListenerToTarget(
      domSelector(SELECTOR.RACING_COUNT_SUBMIT),
      EVENT_TYPE.CLICK,
      this.handleCountSubmit.bind(this),
    );
  }

  handleNameInput = (e: Event) => {
    this.racingGame.setNameInputValue((e.target as HTMLInputElement).value);
  };

  handleNameSubmit = (e: Event) => {
    e.preventDefault();
    const nameInputValue = this.racingGame.getNameInputValue();
    if (!isInputNotNull(nameInputValue)) return;

    const nameInputList = nameMaker(nameInputValue);
    if (!isNameLengthValid(nameInputList)) return;

    this.racingGame.isNameInputValid = true;
  };

  handleCountInput = (e: Event) => {
    this.racingGame.setCountInputValue((e.target as HTMLInputElement).value);
  };

  handleCountSubmit = (e: Event) => {
    e.preventDefault();
    const countInputValue = this.racingGame.getCountInputValue();
    if (!isInputNotNull(countInputValue)) return;

    this.racingGame.isCountInputValid = true;

    this.racingGame.start(this.gameResult);
  };
}

export default Controller;
