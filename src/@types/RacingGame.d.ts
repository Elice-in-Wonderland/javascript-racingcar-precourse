import Car from "../components/Car";

export type TDom = HTMLElement;

export interface ICreateCars {
  cars: Car[];
}
export interface IStartGame {
  times: number;
  dom: TDom;
}
export interface IPaintResult {
  dom: TDom;
}
export interface IPaintBlank {
  dom: TDom;
}
export interface IPaintWinner {
  dom: TDom;
}
