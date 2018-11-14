import { cons, car, cdr } from 'hexlet-pairs';

const qA = (question, answer) => cons(question, answer);
const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export { qA, getAnswer, getQuestion };
