import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const isEven = num => num % 2 === 0;

const questionAndAnswer = () => {
  const question = randNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => engine(description, questionAndAnswer);
