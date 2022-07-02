import { IResultHTML, IIsValidName } from "../@types/Utils";

export function isValidName({ names }: IIsValidName) {
  for (const name of names) if (name.length > 5) return false;
  return true;
}

export function racingResultHTML({ cars }: IResultHTML) {
  return `${cars
    .map((car) => `${car.name}: ${car.movingStatus}\n`)
    .join("")
    .split("\n")
    .join("<br>")}`;
}
