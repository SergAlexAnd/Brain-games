import readlineSync from 'readline-sync';

export default () => {
    const question = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${question}!`);
}; 