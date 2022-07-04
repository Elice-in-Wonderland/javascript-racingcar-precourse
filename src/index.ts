import RacingCarGame from './RacingCarGame';
import ResultView from './ResultView';
import Controller from './Controller';

const racingCarGame = new RacingCarGame();
const resultView = new ResultView();

const myController = new Controller(racingCarGame, resultView);
