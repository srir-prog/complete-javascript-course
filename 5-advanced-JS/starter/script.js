//Function constructor
const Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
        console.log(`${i} : ${this.answers[i]}`);
    }
};

const question1 = new Question(`Is JavaScript the coolest programming 
language int he world?`,
    ['Yes', 'No'],
    0);

console.log(question1);

const question2 = new Question(`What is name of this course's instructor?`,
    ['John', 'Kate', 'Jonas'],
    2);

const question3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2);

const questions = [question1, question2, question3];

var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();