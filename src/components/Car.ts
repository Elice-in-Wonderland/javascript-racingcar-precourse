interface ICarConstructor {
  name: string;
}

export default class Car {
  name: string;
  movingStatus = "";

  constructor({ name }: ICarConstructor) {
    this.name = name;
  }

  isGoingForward() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) return true;
  }

  move() {
    this.movingStatus += "-";
  }

  getDistance() {
    return this.movingStatus.length;
  }
}
