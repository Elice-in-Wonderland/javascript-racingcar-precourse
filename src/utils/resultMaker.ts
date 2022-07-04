import Car from '../compoents/car';

const carResultMaker = (car: Car): string =>
  `${car.name}: ` + '-'.repeat(car.forward);

const calculateMaxForward = (
  cars: Car[],
  racingWinnersForward: number,
): number => {
  cars.map((car) => {
    racingWinnersForward = Math.max(racingWinnersForward, car.forward);
  });

  return racingWinnersForward;
};

const findRacingWinners = (
  cars: Car[],
  racingWinnersForward: number,
  racingWinners: string[],
): string[] => {
  cars.map((car) => {
    if (car.forward === racingWinnersForward) {
      racingWinners.push(car.name);
    }
  });

  return racingWinners;
};

export { carResultMaker, calculateMaxForward, findRacingWinners };
