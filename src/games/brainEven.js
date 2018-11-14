import { qA } from './pairsQA';
import { engine, randNum } from './engine';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
const QA = () => {
  const randomNum = randNum(100);
  return qA(randomNum, isEven(randomNum));
};

export default () => engine(3, 'Answer "yes" if number even otherwise answer "no".', QA);
