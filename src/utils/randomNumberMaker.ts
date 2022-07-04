import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants';

const randomNumberMaker = (): number => {
  return Random.pickNumberInRange(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
};

export default randomNumberMaker;
