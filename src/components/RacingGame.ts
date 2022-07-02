import Car from "./Car";

export default class RacingGame {
  cars: Car[] = [];

  createCars(cars: Car[]) {
    this.cars = cars;
  }

  startGame(times: number, dom: HTMLElement) {
    for (let i = 0; i < times; i++) {
      this.cars.map((car) => {
        car.isGoingForward() && car.move();
        this.paintResult(dom, car);
      });
      this.paintBlank(dom);
    }
  }

  paintResult(dom: HTMLElement, car: Car) {
    const div = document.createElement("div");
    div.innerHTML = `${car.name + ": " + car.movingStatus}`;
    dom.appendChild(div);
  }

  paintBlank(dom: HTMLElement) {
    const br = document.createElement("br");
    dom.appendChild(br);
  }

  paintWinner(dom: HTMLElement) {
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
