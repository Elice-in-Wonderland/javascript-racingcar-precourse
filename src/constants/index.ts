const SELECTOR = {
  RESULT: '#result',
  RACING_WINNERS: '#racing-winners',
  CAR_NAMES_INPUT: '#car-names-input',
  CAR_NAMES_SUBMIT: '#car-names-submit',
  RACING_COUNT_INPIT: '#racing-count-input',
  RACING_COUNT_SUBMIT: '#racing-count-submit',
};

const CREATOR = { UL: 'ul', LI: 'li' };

const STYLE = { PADDING: '0px', LIST_STYLE: 'none' };

const EVENT_TYPE = { INPUT: 'input', CLICK: 'click' };

const ERROR_MESSAGE = {
  NAME_LENGTH_INVALID: '자동차 이름을 5자 이하로 입력하세요.',
  INPUT_NULL: '인풋을 입력하세요.',
  NAME_NOT_VALID: '이름을 입력 후, 제출하세요.',
  COUNT_NOT_VALID: '숫자를 입력 후, 제출하세요.',
};

const CAR_NAME_MIN_LENGTH = 5;

const FORWARD_MIN_NUMBER = 4;

const RANDOM_NUMBER = { MIN: 0, MAX: 9 };
export {
  SELECTOR,
  CREATOR,
  STYLE,
  EVENT_TYPE,
  ERROR_MESSAGE,
  CAR_NAME_MIN_LENGTH,
  FORWARD_MIN_NUMBER,
  RANDOM_NUMBER,
};
