#!/usr/bin/env node
import { welcome, nameQuestion, brainEven } from '..';

// приветсвие
welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
// узнать имя и записать в константу
const name = nameQuestion();

// игра
brainEven(name);
