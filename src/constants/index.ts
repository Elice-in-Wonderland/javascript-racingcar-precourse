const SELECTOR = {
  ROOT: '#app',
  CAR_NAMES_FORM: '#car-names-form',
  CAR_NAMES_INPUT: '#car-names-input',
  CAR_NAMES_SUBMIT: '#car-names-submit',
  RACING_COUNT_FORM: '#racing-count-form',
  RACING_COUNT_INPUT: '#racing-count-input',
  RACING_COUNT_SUBMIT: '#racing-count-submit',
  RACING_WINNERS: '#racing-winners',
};

const ERROR_MESSAGE = {
  CAR_NAME_DUPLICATE:
    '자동차 이름은 중복되지 않게 작성해주세요. ex) east, west',
  CAR_NAME_LENGTH: '자동차 이름은 5자 이하로 작성해주세요. ex) east, west',
  CAR_NAME_COMMA: '자동차 이름을 쉼표로 구분해주세요. ex) east, west',
};

const CAR = {
  NAME_LENGTH: 5,
};

export { SELECTOR, ERROR_MESSAGE, CAR };
