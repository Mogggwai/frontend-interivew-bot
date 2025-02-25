const questions = require('./questions.json');
const { Random } = require('random-js');

const getRandomQuestion = (topic) => {

    const questionTopic = topic.toLowerCase();
    const random = new Random();
    const randomQuestionIndex = random.integer(0, questions[questionTopic].length - 1);
    
    return questions[questionTopic][randomQuestionIndex];
    };

    module.exports = { getRandomQuestion, }