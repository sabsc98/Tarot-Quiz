const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice text"));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Which best describes the Major Arcana card "The Wheel of Fortune" '
        choice1: 'Fundamental change is imminent. The positive benefits you gain during this period could last a long time.',
        choice2: 'The law of karma, has to do with moral sensitivity and that which gives rise to empathy, compassion, and a sense of fairness. Since the time of Solomon, this image has represented a standard for the humane and fair-minded treatment of other beings.',
        choice3: 'Freeing yourself from a past that no longer serves you well and proceed toward the future.',
        choice4: 'Finding the ingredients that will most help you complete your mission and leave the rest behind. The soul volunteers the ego for a cleansing and healing experience, which may turn the personality inside-out, but which brings out the gold hidden within the heart.',
        answer: 1,
    },
    {
        question: Which card best describes this statement? 'the culturally rejected wildness and undigested shadow side that each of us carries in our subconscious. This shadow is actually at the core of our being',
        choice1: The Magician,
        choice2: Two of Swords,
        choice3: The Devil,
        choice4: Ace of Wands,
        answer: 3,    
    },
    {
        question: Which card best describes this statement? 'Representative of the ultimate test of a souls integrity, where the membrane between the self and the unknown is removed, and the drop of individuality re-enters the ocean of being. ',
        choice1: Eight of cups,
        choice2: Three of Swords,
        choice3: Knight of Wands,
        choice4: The Moon,
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page 
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableeQuestions.length);
    currentQuestion = availableQuestions[questionIndex, 1];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();
