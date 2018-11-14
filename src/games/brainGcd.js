import { qA } from './pairsQA';
import { engine, randNum } from './engine';

// наибольший общий делитель двух чисел
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
// функция которая формирует вопрос и ответ
const QA = () => {
  const num1 = randNum(100);
  const num2 = randNum(100);
  return qA(`${num1} ${num2}`, gcd(num1, num2));
};

export default () => engine(3, 'Find the greatest common divisor of given numbers.', QA);
