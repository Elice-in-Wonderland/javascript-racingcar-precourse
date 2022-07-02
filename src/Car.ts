class Car {
  name: string;

  position: number;

  constructor(name: string) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
