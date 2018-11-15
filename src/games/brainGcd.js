import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const questionAndAnswer = () => {
  const num1 = randNum(0, 100);
  const num2 = randNum(0, 100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return cons(question, answer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => engine(description, questionAndAnswer);
