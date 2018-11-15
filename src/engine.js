import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default (description, questionAndRightAnswer) => {
  console.log('Welcome to Brain Games!');
  console.log(description);
  const name = getName();
  const iter = (round) => {
    if (round === rounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const questionAndRightAnsw = questionAndRightAnswer();
    const question = car(questionAndRightAnsw);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(questionAndRightAnsw);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
      return;
    }
    iter(round + 1);
  };
  return iter(0);
};
