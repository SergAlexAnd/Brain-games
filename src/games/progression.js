import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randNum from '../utils';

const lengthOfProgression = 10;
const firstElement = () => randNum(0, 20);
const stepOfprogression = () => randNum(1, 10);

const randomProgression = (first, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = first + step * i;
  }
  return result;
};

const questionAndAnswer = () => {
  const progression = randomProgression(firstElement(), stepOfprogression(), lengthOfProgression);
  const hiddenElementPosition = randNum(0, lengthOfProgression - 1);
  const answer = `${progression[hiddenElementPosition]}`;
  progression[hiddenElementPosition] = '..';
  const question = `${progression.join(' ')}`;
  return cons(question, answer);
};

const description = 'What number is missing in the progression?';

export default () => engine(description, questionAndAnswer);
