import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const length = 10;
const getfirstElement = () => randNum(0, 20);
const getStep = () => randNum(1, 10);

const randomProgression = (first, step, lengthOfProgression) => {
  const result = [];
  const firstElement = first();
  const stepOfProgression = step();
  for (let i = 0; i < lengthOfProgression; i += 1) {
    result[i] = firstElement + stepOfProgression * i;
  }
  return result;
};

const questionAndAnswer = () => {
  const progression = randomProgression(getfirstElement, getStep, length);
  const hiddenElementPosition = randNum(0, 9);
  const answer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  const question = `${progression.join(' ')}`;
  return cons(question, answer);
};

const description = 'What number is missing in the progression?';

export default () => engine(description, questionAndAnswer);
