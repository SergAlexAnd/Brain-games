import readlineSync from 'readline-sync';
import { welcome, nameQuestion } from '..';
import { getAnswer, getQuestion } from './pairsQA';

export const randNum = multiplier => Math.round(Math.random() * multiplier);

export const engine = (rounds, explanation, queAns) => {
  welcome(explanation);
  const name = nameQuestion();
  const iter = (round) => {
    // если было уже rounds вопросов заканчиваем
    if (round === rounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    // выводим номер
    const questionAndRightAnsw = queAns();
    const question = getQuestion(questionAndRightAnsw);
    console.log(`Question: ${question}`);
    // записываем ответ
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = getAnswer(questionAndRightAnsw);
    // проверяем правильный ли ответ
    // eslint-disable-next-line eqeqeq
    if (answer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
      return;
    }
    // eslint-disable-next-line consistent-return
    return iter(round + 1);
  };
  return iter(0);
};
