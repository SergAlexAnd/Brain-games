import { qA } from './pairsQA';
import { engine, randNum } from './engine';

const QA = () => {
  const num1 = randNum(100);
  const num2 = randNum(100);
  switch (randNum(3)) {
    case 1:
      return qA(`${num1} + ${num2}`, num1 + num2);
    case 2:
      return qA(`${num1} - ${num2}`, num1 - num2);
    case 3:
      return qA(`${num1} * ${num2}`, num1 * num2);
    default:
      return qA(`${num1} - ${num2}`, num1 - num2);
  }
};

export default () => engine(3, 'What is the result of the expression?', QA);
