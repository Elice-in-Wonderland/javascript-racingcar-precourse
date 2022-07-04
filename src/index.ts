import Controller from './controller';
import RacingGame from './racingGame';
import GameResult from './compoents/gameResult';

const racingGame = new RacingGame();
const gameResult = new GameResult();

new Controller(racingGame, gameResult);
