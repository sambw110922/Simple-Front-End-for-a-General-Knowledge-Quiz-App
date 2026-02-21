/*
    quiz game script.js
    1st February 2026.
    This is the main script for the quiz game.
*/

//  The primary question bank.
const primaryQuestionBank = [
    {
        "questionId":1,
        "question":"Which of these countries has a flag that is not a rectangle?",
        "answer":"Nepal",
        "opt1":"Nepal",
        "opt2":"Japan",
        "opt3":"New Zealand",
        "opt4":"Canada"
    },
    {
        "questionId":2,
        "question":"What is the most common colour on world flags?",
        "answer":"Red",
        "opt1":"Red",
        "opt2":"Yellow",
        "opt3":"Blue",
        "opt4":"Purple"
    },
    {
        "questionId":3,
        "question":"Which of these countries has a flag with a mythical creature?",
        "answer":"Wales",
        "opt1":"Wales",
        "opt2":"Scotland",
        "opt3":"England",
        "opt4":"Northern Ireland"
    },
    {
        "questionId":4,
        "question":"On the flag of the USA, what colour are the stars?",
        "answer":"White",
        "opt1":"White",
        "opt2":"Red",
        "opt3":"Blue",
        "opt4":"Green"
    },
    {
        "questionId":5,
        "question":"In Star Trek: The Next Generation, what rank was Jean-Luc Picard?",
        "answer":"Captain",
        "opt1":"Captain",
        "opt2":"Commander",
        "opt3":"Admiral",
        "opt4":"Cadet"
    },
    {
        "questionId":6,
        "question":"Which of these flags features stars?",
        "answer":"China",
        "opt1":"China",
        "opt2":"Japan",
        "opt3":"United Kingdom",
        "opt4":"Italy"
    },
    {
        "questionId":7,
        "question":"In the UK, which of these rivers was the longest?",
        "answer":"Severn",
        "opt1":"Severn",
        "opt2":"Thames",
        "opt3":"Trent",
        "opt4":"Ouse"
    },
    {
        "questionId":8,
        "question":"In the UK, who was the shortest reigning monarch?",
        "answer":"Lady Jane Gray",
        "opt1":"Lady Jane Gray",
        "opt2":"Elizabeth the First",
        "opt3":"Henry the Eighth",
        "opt4":"Mary the First"
    },
    {
        "questionId":9,
        "question":"Which of these was Sherlock Holmes' assistant?",
        "answer":"John Watson",
        "opt1":"John Watson",
        "opt2":"Dana Scully",
        "opt3":"Sam Stewart",
        "opt4":"Arthur Hastings"
    },
    {
        "questionId":10,
        "question":"Who is Mario's main enemy?",
        "answer":"Bowser",
        "opt1":"Bowser",
        "opt2":"Gannon",
        "opt3":"Eggman",
        "opt4":"Robotnick"
    },
    {
        "questionId":11,
        "question":"In The Godfather, what is Michael's family name?",
        "answer":"Corleone",
        "opt1":"Corleone",
        "opt2":"Hagen",
        "opt3":"Barzini",
        "opt4":"Tattaglia"
    },
    {
        "questionId":12,
        "question":"What mode of transport featured in Agatha Christie's Murder on the Orient Express?",
        "answer":"Train",
        "opt1":"Train",
        "opt2":"Plane",
        "opt3":"Car",
        "opt4":"Lorry"
    },
    {
        "questionId":13,
        "question":"In what year did the Titanic sink?",
        "answer":"1912",
        "opt1":"1912",
        "opt2":"1911",
        "opt3":"1910",
        "opt4":"1913"
    },
    {
        "questionId":14,
        "question":"What is the occupation of Moe in The Simpsons?",
        "answer":"Bartender",
        "opt1":"Bartender",
        "opt2":"Safety Inspector",
        "opt3":"Teacher",
        "opt4":"Doctor"
    },
    {
        "questionId":15,
        "question":"In Harry Potter, what is the name of Harry's house?",
        "answer":"Gryffindor",
        "opt1":"Gryffindor",
        "opt2":"Ravenclaw",
        "opt3":"Slytherin",
        "opt4":"Hufflepuff"
    },
    {
        "questionId":16,
        "question":"In Star Trek, complete the Vulcan saying, \"live long, and...\"",
        "answer":"Prosper",
        "opt1":"Prosper",
        "opt2":"Profit",
        "opt3":"Good morning",
        "opt4":"Goodbye"
    },
    {
        "questionId":17,
        "question":"In Star Trek The Original Series, what colour uniform did Spock wear?",
        "answer":"Blue",
        "opt1":"Blue",
        "opt2":"Gold",
        "opt3":"Brown",
        "opt4":"Silver"
    },
    {
        "questionId":18,
        "question":"Complete the Metallica album: Master of...?",
        "answer":"Puppets",
        "opt1":"Puppets",
        "opt2":"Teddy Bears",
        "opt3":"Dolls",
        "opt4":"Hats"
    },
    {
        "questionId":19,
        "question":"What soap is the character Phil Mitchell in?",
        "answer":"Eastenders",
        "opt1":"Eastenders",
        "opt2":"Corronation Street",
        "opt3":"Hollyoaks",
        "opt4":"Emmerdale"
    },
    {
        "questionId":20,
        "question":"Which of these is largest?",
        "answer":"Gigabyte",
        "opt1":"Gigabyte",
        "opt2":"Kilobyte",
        "opt3":"Megabyte",
        "opt4":"Nibble"
    }
];

//  Is the game on?
var gameIsOn = false;

//  The total questions that the player has answered correctly.
var correctQuestions = 0;

//  The number of questions answered.
var noQuestionsAnswered = 0;

//  The question to display.
var questionToDisplay = 0;

//  This checks to see if the question is correct.
function CheckAnswer(questionId, answer) {

    for (let i = 0; i < primaryQuestionBank.length; i++) {

        if (primaryQuestionBank[i].questionId == questionId) {

            if (answer == primaryQuestionBank[i].answer) {

                document.getElementById("txtStatus").textContent = "";
                document.getElementById("txtStatus").textContent = "Correct!";

                correctQuestions++;
                

            } else {

                document.getElementById("txtStatus").textContent = "Wrong!";
                document.getElementById("txtStatus").textContent = "Correct answer: " + primaryQuestionBank[i].answer;

            }

            //  Checks the number of lives.
            CheckLives();

            //  Updates the score to player.
            UpdateScores();

            break;

        }

    }

}

//  Checks the number of lives left.
function CheckLives() {

    if (gameIsOn == true) {

        if (noQuestionsAnswered < primaryQuestionBank.length)  {

            document.getElementById("btnNext").className = "";
            document.getElementById("btnNext").className = "showNextButton";

        } else {

            window.alert("Game end!");
            window.alert("Corret: " + correctQuestions + " / Questions answered: " + noQuestionsAnswered);
            
            gameIsOn = false;
            HideQuiz();

        }

    }

}

//  Updates the scores.
function UpdateScores() {

    document.getElementById("txtCorrect").textContent = "";
    document.getElementById("txtCorrect").textContent = correctQuestions + "/20";

    document.getElementById("txtAnswered").textContent = "";
    document.getElementById("txtAnswered").textContent = noQuestionsAnswered + "/20";

}

//  Displays a random question
function DisplayRandomQuestion() {

    //  Show question options
    document.getElementById("questionButtonContainer").className = "";
    document.getElementById("questionButtonContainer").className = "showQuestionButtonContainer";

    //  Hide question status
    document.getElementById("txtStatus").className = "";
    document.getElementById("txtStatus").className = "hideQuestionStatus";

    //  Get a random question from the question bank.
    const randomQuestionIdx = Math.floor(Math.random() * primaryQuestionBank.length);
    const randomQuestion = primaryQuestionBank[randomQuestionIdx];

    document.getElementById("txtQuestion").textContent = randomQuestion.question;

    //  The question answer options.
    var questionOptions = [
        randomQuestion.opt1,
        randomQuestion.opt2,
        randomQuestion.opt3,
        randomQuestion.opt4
    ];

    //  Give the buttons the id of the question that they're answering.
    document.getElementById("btnOptA").setAttribute("data-questionId", randomQuestion.questionId);
    document.getElementById("btnOptB").setAttribute("data-questionId", randomQuestion.questionId);
    document.getElementById("btnOptC").setAttribute("data-questionId", randomQuestion.questionId);
    document.getElementById("btnOptD").setAttribute("data-questionId", randomQuestion.questionId);

    //  First random question
    const random1 = Math.floor(Math.random() * questionOptions.length);
    document.getElementById("btnOptA").textContent = questionOptions[random1];
    questionOptions.splice(random1, 1);

    //  Second random question
    const random2 = Math.floor(Math.random() * questionOptions.length);
    document.getElementById("btnOptB").textContent = questionOptions[random2];
    questionOptions.splice(random2, 1);

    //  Third random question
    const random3 = Math.floor(Math.random() * questionOptions.length);
    document.getElementById("btnOptC").textContent = questionOptions[random3];
    questionOptions.splice(random3, 1);

    //  The last question
    document.getElementById("btnOptD").textContent = questionOptions[0];

}

//  Hides the play button and starts the game.
function StartGame() {

    //  Reset the game
    questionToDisplay = 0;
    correctQuestions = 0;
    noQuestionsAnswered = 0;

    gameIsOn = true;

    document.getElementById("txtCorrect").textContent = "";
    document.getElementById("txtAnswered").textContent = "";

    document.getElementById("txtCorrect").textContent = correctQuestions + "/20";
    document.getElementById("txtAnswered").textContent = noQuestionsAnswered + "/20";

    document.getElementById("playControls").className = "";
    document.getElementById("playControls").className = "hidePlayButton";

    document.getElementById("quizGame").className = "";
    document.getElementById("quizGame").className = "showQuizGame";

    //  Displays a random question.
    DisplayRandomQuestion();

}

//  Hides the quiz.
function HideQuiz() {

    gameIsOn = false;
    
    document.getElementById("playControls").className = "";
    document.getElementById("playControls").className = "showPlayButton";

    document.getElementById("quizGame").className = "";
    document.getElementById("quizGame").className = "hideQuizGame";

}

//  The main program.
function init() {

    //  Hide the quiz. The game's not on yet.
    HideQuiz();

    //  The play button turns everything on
    document.getElementById("btnPlay").addEventListener("click", function() {

        //  Hide the next button
        document.getElementById("btnNext").className = "";
        document.getElementById("btnNext").className = "hideNextButton";

        //  Start the game
        StartGame();

    });

    //  IDs of the button options.
    const optionButtons = ["btnOptA", "btnOptB", "btnOptC", "btnOptD"];

    //  Add an event for all option buttons
    for (let i = 0; i < optionButtons.length; i++) {

        document.getElementById(optionButtons[i]).addEventListener("click", function(){

            //  A question has been answered.
            noQuestionsAnswered++;

            const questionId = this.getAttribute("data-questionId");
            const theAnswer = this.textContent;

            document.getElementById("txtStatus").className = "";
            document.getElementById("txtStatus").className = "showQuestionStatus";

            document.getElementById("btnNext").className = "";
            document.getElementById("btnNext").className = "showNextButton";

            document.getElementById("questionButtonContainer").className = "";
            document.getElementById("questionButtonContainer").className = "hideQuestionButtonContainer";

            //  Check the answer.
            CheckAnswer(questionId, theAnswer);

        });

        //  Next question
        document.getElementById("btnNext").addEventListener("click", function(){

            //  Displays a random question
            DisplayRandomQuestion();

            document.getElementById("btnNext").className = "";
            document.getElementById("btnNext").className = "hideNextButton";

        });

    }    


}

//  Run the program.
init();