import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to Brain Games!');

const nameQuestion = () => {
  const question = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${question}!\n`);
  return question;
};

const brainEven = (name) => {
  const iter = (count, number) => {
    // если было уже 3 вопроса заканчиваем
    if (count === 3) return console.log(`Congratulations, ${name}!`);
    // выводим номер
    console.log(`Question: ${number}`);
    // записываем ответ
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    // проверяем правильный ли ответ
    if (answer.toLowerCase() === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
    }
    return iter(count + 1, Math.round(Math.random() * 100));
  };
  return iter(0, Math.round(Math.random() * 100));
};

export { welcome, nameQuestion, brainEven };
