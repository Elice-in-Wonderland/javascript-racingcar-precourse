import Car from "./Car";

export default class RacingGame {
  cars: Car[] = [];

  createCars(cars: Car[]) {
    this.cars = cars;
  }

  startGame() {
    this.cars.map((car) => car.isGoingForward() && car.move());
  }

  findWinner() {
    const maxDistance = this.findMaxDistance();
    const winners = this.cars.filter(
      (car) => car.getDistance() === maxDistance
    );
    return winners;
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
