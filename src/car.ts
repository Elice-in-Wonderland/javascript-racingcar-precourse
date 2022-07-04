import { forwardMovement, randomNumber } from "./utils";
export class Car {
  move: number;
  name: string;
  constructor(name: string) {
    this.name = name;
    this.move = 0;
  }
  getName() {
    return this.name;
  }
  getMoveNumber() {
    return this.move;
  }
  moveNumber() {
    if (forwardMovement(randomNumber())) {
      this.move += 1;
      return this.move;
    }
    return this.move;
  }
}
