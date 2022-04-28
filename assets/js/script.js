const mainSection = document.getElementById("main");
const startContainer = document.getElementById("banner");
const startBtn = document.getElementById("startBtn");
// const mainElement = document.getElementById("main");

let timer = 100;
let questionIndex = 0;
// declear my questions and answers array
const questions = [
  {
    question: "What is a Bombay Duck?",
    answers: [
      "A type of duck",
      "A type of curry",
      "A basketball term",
      "A type of fish",
    ],
    correctAnswer: "A type of fish",
  },
  {
    question:
      "In New Zealand what is it illegal to fly in a hot air balloon with?",
    answers: ["A dog", "A bicycle", "A violin", "A rooster"],
    correctAnswer: "A rooster",
  },
  {
    question:
      " If you dug a hole through the center of the Earth from Wellington, New Zealand, in which European country would you emerge?",
    answers: ["Germany", "Spain", "France", "Poland"],
    correctAnswer: "Spain",
  },
  {
    question: "what would you like to eat?",
    answers: ["chicken", "cake", "drink", "anything"],
    correctAnswer: "chicken",
  },
  {
    question: "what would you like to eat?",
    answers: ["chicken", "cake", "drink", "anything"],
    correctAnswer: "chicken",
  },
  {
    question: "what would you like to eat?",
    answers: ["chicken", "cake", "drink", "anything"],
    correctAnswer: "chicken",
  },
  {
    question: "what would you like to eat?",
    answers: ["chicken", "cake", "drink", "anything"],
    correctAnswer: "chicken",
  },
  {
    question: "what would you like to eat?",
    answers: ["chicken", "cake", "drink", "anything"],
    correctAnswer: "chicken",
  },
];

const validateAnswer = (event) => {
  console.log(event.target);
  questionIndex += 1;

  // if statement to check the last question or not
  removeQuestionSection();
  renderQuestionSection();
};

const removeStartSection = () => {
  mainSection.removeChild(startContainer);
};

const removeQuestionSection = () => {
  const questionSection = document.getElementById("question-section");
  mainSection.removeChild(questionSection);
};
const renderQuestionSection = () => {
  // get each question by get the questions array
  const question = questions[questionIndex];

  // creat section element
  const questionSection = document.createElement("section");
  questionSection.setAttribute("class", "question-section");
  questionSection.setAttribute("id", "question-section");

  // create h1 title
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "question-section-title");
  h1.textContent = `Question ${questionIndex + 1}:`;

  // creat h2 info
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-section-info");
  h2.textContent = question.question;

  // creat ul info
  const ul = document.createElement("ul");
  ul.setAttribute("class", "answers");

  // creat answers using forEach function
  const createAppendAnswer = (answer) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.setAttribute("class", "answer-button");
    btn.textContent = answer;
    li.append(btn);
    ul.append(li);
  };

  question.answers.forEach(createAppendAnswer);

  // append section and main
  questionSection.append(h1, h2, ul);
  mainSection.append(questionSection);

  // add click event listener on question-section to check answer
  questionSection.addEventListener("click", validateAnswer);
};

const renderTimerSection = () => {
  const timerSpanSection = document.createElement("section");
  timerSpanSection.setAttribute("id", "timerSpanSection");
  timerSpanSection.textContent = "Timer: ";
  const timerSpan = document.createElement("span");
  timerSpan.setAttribute("id", "timerSpan");
  timerSpan.textContent = 0;
  timerSpanSection.append(timerSpan);
  mainSection.append(timerSpanSection);
};

const startTimer = () => {
  timer -= 1;
  const timerSpan = document.getElementById("timerSpan");
  timerSpan.textContent = timer;
};

const startQuiz = () => {
  removeStartSection();

  // render timerSection and starts the time counting down from 100 second
  renderTimerSection();
  const timerId = setInterval(startTimer, 1000);
  // console.log(timerId);

  // render question function
  renderQuestionSection();
};

// add event listeners
// add document on load event listener
// add start button click event listener

startBtn.addEventListener("click", startQuiz);
