import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const questionAndAnswer = () => {
  const num1 = randNum(0, 100);
  const num2 = randNum(0, 100);
  switch (randNum(1, 3)) {
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

const description = 'What is the result of the expression?';

export default () => engine(description, questionAndAnswer);
