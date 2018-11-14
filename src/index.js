import readlineSync from 'readline-sync';

const welcome = (explanation) => {
  console.log('Welcome to Brain Games!');
  if (explanation) console.log(explanation);
};

const nameQuestion = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export { welcome, nameQuestion };
