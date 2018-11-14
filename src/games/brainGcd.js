import { cons } from 'hexlet-pairs';
import { engine, randNum } from '../engine';


const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const questionAndAnswer = () => {
  const num1 = randNum(100);
  const num2 = randNum(100);
  return cons(`${num1} ${num2}`, gcd(num1, num2));
};

export default () => engine('Find the greatest common divisor of given numbers.', questionAndAnswer);
