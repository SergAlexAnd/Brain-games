import readlineSync from 'readline-sync';
import { welcome, nameQuestion } from '..';
import { getAnswer, getQuestion } from './pairsQA';

// случайный номер от 0 до multiplier
export const randNum = multiplier => Math.round(Math.random() * multiplier);

// движок игры
export const engine = (rounds, explanation, queAns) => {
  welcome(explanation);
  const name = nameQuestion();
  const iter = (round) => {
    // если было уже rounds вопросов заканчиваем
    if (round === rounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    // формируем вопрос и правильный ответ
    const questionAndRightAnsw = queAns();
    // получаем вопрос
    const question = getQuestion(questionAndRightAnsw);
    console.log(`Question: ${question}`);
    // записываем ответ
    const answer = readlineSync.question('Your answer: ');
    // получаем правильный ответ
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
