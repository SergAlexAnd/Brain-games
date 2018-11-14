import { cons } from 'hexlet-pairs';
import { engine, randNum } from '../engine';

const isEven = num => num % 2 === 0;

const questionAndAnswer = () => {
  const question = randNum(100);
  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => engine('Answer "yes" if number even otherwise answer "no".', questionAndAnswer);
