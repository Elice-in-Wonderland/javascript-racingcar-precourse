import Car from "./Car";
import {
  ICreateCars,
  IStartGame,
  IPaintResult,
  IPaintBlank,
  IPaintWinner,
} from "../@types/RacingGame";
import { racingResultHTML } from "../utils/index";

export default class RacingGame {
  cars: Car[] = [];

  createCars({ cars }: ICreateCars) {
    this.cars = cars;
  }

  startGame({ times, dom }: IStartGame) {
    this.resetCars();
    for (let i = 0; i < times; i++) {
      this.moveCars();
      this.paintResult({ dom });
      this.paintBlank({ dom });
    }
  }

  resetCars() {
    this.cars.map((car) => car.resetDistance());
  }

  moveCars() {
    this.cars.map((car) => car.isGoingForward() && car.move());
  }

  paintResult({ dom }: IPaintResult) {
    dom.innerHTML = "📄 실행 결과";
    const div = document.createElement("div");
    div.innerHTML = racingResultHTML({ cars: this.cars });
    dom.appendChild(div);
  }

  paintBlank({ dom }: IPaintBlank) {
    const br = document.createElement("br");
    dom.appendChild(br);
  }

  paintWinner({ dom }: IPaintWinner) {
    dom.innerHTML = this.findWinner();
  }

  findWinner() {
    const maxDistance = this.findMaxDistance();
    const winners = this.cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((winner) => winner.name);
    return winners.length > 1 ? winners.join(", ") : winners.toString();
  }

  findMaxDistance() {
    let maxDistance = 0;
    this.cars.forEach((car) => {
      const carDistance = car.getDistance();
      if (maxDistance < carDistance) maxDistance = carDistance;
    });
    return maxDistance;
  }
}
