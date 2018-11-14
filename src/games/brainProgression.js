import { cons } from 'hexlet-pairs';
import { engine, randNum } from '../engine';


const randomProgression = () => {
  const result = [];
  const length = 10;
  result[0] = randNum(20);
  const multiplier = randNum(9) + 1;
  for (let i = 1; i < length; i += 1) {
    result[i] = result[i - 1] + multiplier;
  }
  return result;
};

const questionAndAnswer = () => {
  const progression = randomProgression();
  const randomIndex = randNum(9);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  return cons(`${progression.join(' ')}`, answer);
};

export default () => engine('What number is missing in the progression?', questionAndAnswer);
