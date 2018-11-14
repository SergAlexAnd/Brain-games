import { cons } from 'hexlet-pairs';
import { engine, randNum } from '../engine';

const questionAndAnswer = () => {
  const num1 = randNum(100);
  const num2 = randNum(100);
  switch (randNum(3)) {
    case 1:
      return cons(`${num1} + ${num2}`, num1 + num2);
    case 2:
      return cons(`${num1} - ${num2}`, num1 - num2);
    case 3:
      return cons(`${num1} * ${num2}`, num1 * num2);
    default:
      return cons(`${num1} - ${num2}`, num1 - num2);
  }
};

export default () => engine('What is the result of the expression?', questionAndAnswer);
