
//IIFE

(function () {
    const Question = function (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestion = function () {//We add methods to Constructor function's prototype to not duplicate the method of all created objects.
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i} : ${this.answers[i]}`);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        let score;
        if (this.correct === ans) {
            console.log(`Correct answer!`);
            score = callback(true);
        } else {
            console.log(`Wrong answer.Try again:)`);
            score = callback(false);
        }
        this.displayScore(score);
    };

    Question.prototype.displayScore = function (score) {
        console.log(`Your current score is ${score}`);
        console.log(`------------------------------`);
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

    function score() {
        let count = 0;
        return function (correct) {
            if (correct) {
                count++;
            }
            return count;
        }
    }
    const keepScore = score();
    const questions = [question1, question2, question3];
    function askQuestion() {
        const n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        const answer = prompt(`Please select the correct answer.`);
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            askQuestion();
        }
    }
    askQuestion();
})();//It creates new scope so there will no collisions with vaiables and function names that we use.

