export function variable() {
  let carList: Array<string> = [];
  let attemptNumber = 0;

  return {
    setCarList: function set(list: Array<string>) {
      carList = list;
    },
    getCarList: function get() {
      return carList;
    },
    setAttemptNumber: function set(number: number) {
      attemptNumber = number;
    },
    getAttemptNumber: function get() {
      return attemptNumber;
    },
  };
}
