declare namespace MissionUtils {
  class Random {
    static pickNumberInRange(a: number, b: number): number;
  }
}
interface IVariables {
  setCarList(list: Array<string>): void;
  getCarList(): Array<string>;
  setAttemptNumber(number: number): void;
  getAttemptNumber(): number;
}

interface ICar {
  name: string;
  move: number;
}
