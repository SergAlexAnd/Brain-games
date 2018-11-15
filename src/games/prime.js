import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const questionAndAnswer = () => {
  const question = randNum(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => engine(description, questionAndAnswer);
