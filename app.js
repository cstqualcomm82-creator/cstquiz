// Firebase configuration
const firebaseConfig = {
    // Replace with your Firebase project configuration
    apiKey: "AIzaSyDHa0x5W0JiLYRH6kXyNAiu8Y87ezAgIg0",
    authDomain: "quizapp-802a0.firebaseapp.com",
    databaseURL: "https://quizapp-802a0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quizapp-802a0",
    storageBucket: "quizapp-802a0.firebasestorage.app",
    messagingSenderId: "628871785477",
    appId: "1:628871785477:web:000824044a5e5d593e806c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DOM Elements
const loginSection = document.getElementById('login-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const leaderboardSection = document.getElementById('leaderboard-section');

const nameInput = document.getElementById('name');
// Employee ID field removed
const startQuizBtn = document.getElementById('start-quiz');
const loginError = document.getElementById('login-error');

const userNameSpan = document.getElementById('user-name');
const quizTimer = document.getElementById('quiz-timer');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question');
const submitQuizBtn = document.getElementById('submit-quiz');

const resultName = document.getElementById('result-name');
// Result ID field removed
const resultScore = document.getElementById('result-score');
const resultTime = document.getElementById('result-time');

const viewLeaderboardBtn = document.getElementById('view-leaderboard');
const viewLeaderboardResultsBtn = document.getElementById('view-leaderboard-results');
const backToLoginBtn = document.getElementById('back-to-login');
const backToLoginResultsBtn = document.getElementById('back-to-login-results');
const answerReviewContainer = document.getElementById('answer-review-container');
const topPerformersList = document.getElementById('top-performers');
const leaderboardBody = document.getElementById('leaderboard-body');

// Quiz variables
let currentUser = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let quizEndTime = null;
let timerInterval = null;
let seconds = 0;
let startTimestamp = 0;

// Load top performers on page load
window.addEventListener('DOMContentLoaded', loadTopPerformers);

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', handleNextQuestion);
submitQuizBtn.addEventListener('click', submitQuiz);
viewLeaderboardBtn.addEventListener('click', showLeaderboard);
viewLeaderboardResultsBtn.addEventListener('click', showLeaderboard);
backToLoginBtn.addEventListener('click', goBackToLogin);
backToLoginResultsBtn.addEventListener('click', goBackToLogin);

// Functions
function loadTopPerformers() {
    database.ref('leaderboard').orderByChild('score').limitToLast(5).once('value')
        .then(snapshot => {
            const leaderboardData = [];
            snapshot.forEach(childSnapshot => {
                leaderboardData.push(childSnapshot.val());
            });
            
            // Sort by score (descending) and then by time (ascending)
            leaderboardData.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return a.timeTaken - b.timeTaken;
            });
            
            // Display top 5 performers
            topPerformersList.innerHTML = '';
            leaderboardData.forEach((entry, index) => {
                const row = document.createElement('tr');
                
                const rankCell = document.createElement('td');
                rankCell.textContent = index + 1;
                
                const nameCell = document.createElement('td');
                nameCell.textContent = entry.name;
                
                const scoreCell = document.createElement('td');
                scoreCell.textContent = `${entry.score}/10`;
                
                const timeCell = document.createElement('td');
                timeCell.textContent = formatTime(entry.timeTaken);
                
                row.appendChild(rankCell);
                row.appendChild(nameCell);
                row.appendChild(scoreCell);
                row.appendChild(timeCell);
                
                topPerformersList.appendChild(row);
            });
            
            // If there are fewer than 5 entries, add empty entries
            if (leaderboardData.length < 5) {
                for (let i = leaderboardData.length; i < 5; i++) {
                    const row = document.createElement('tr');
                    
                    const rankCell = document.createElement('td');
                    rankCell.textContent = i + 1;
                    
                    const nameCell = document.createElement('td');
                    nameCell.textContent = '--';
                    
                    const scoreCell = document.createElement('td');
                    scoreCell.textContent = '--';
                    
                    const timeCell = document.createElement('td');
                    timeCell.textContent = '--';
                    
                    row.appendChild(rankCell);
                    row.appendChild(nameCell);
                    row.appendChild(scoreCell);
                    row.appendChild(timeCell);
                    
                    topPerformersList.appendChild(row);
                }
            }
        })
        .catch(error => {
            console.error("Error loading top performers:", error);
        });
}

function startQuiz() {
    const name = nameInput.value.trim();
    
    if (!name) {
        loginError.textContent = "Please enter your name.";
        return;
    }
    
    // Check if user has already taken the quiz
    database.ref('leaderboard').orderByChild('name').equalTo(name).once('value')
        .then(snapshot => {
            if (snapshot.exists()) {
                loginError.textContent = "You have already taken this quiz.";
                return;
            }
            
            // User hasn't taken the quiz yet, proceed
            currentUser = {
                name: name
            };
            
            // Select 10 random questions from the pool
            selectedQuestions = getRandomQuestions(quizQuestions, 10);
            currentQuestionIndex = 0;
            userAnswers = Array(10).fill(null);
            
            // Show quiz section and hide login section
            loginSection.classList.add('hidden');
            quizSection.classList.remove('hidden');
            
            // Set user name in quiz section
            userNameSpan.textContent = name;
            
            // Start the timer
            startTimer();
            
            // Load the first question
            loadQuestion();
        })
        .catch(error => {
            console.error("Error checking user:", error);
            loginError.textContent = "An error occurred. Please try again.";
        });
}

function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function startTimer() {
    quizStartTime = new Date();
    startTimestamp = quizStartTime.getTime();
    seconds = 0;
    
    // Timer for elapsed time
    timerInterval = setInterval(() => {
        seconds++;
        quizTimer.textContent = formatTime(seconds);
    }, 1000);
}


function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // Update question number and text
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === option) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(optionElement, option));
        optionsContainer.appendChild(optionElement);
    });
    
    // Show/hide buttons based on question index
    if (currentQuestionIndex === 9) {
        nextQuestionBtn.classList.add('hidden');
        submitQuizBtn.classList.remove('hidden');
    } else {
        nextQuestionBtn.classList.remove('hidden');
        submitQuizBtn.classList.add('hidden');
    }
}

function selectOption(optionElement, option) {
    // Remove selected class from all options
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Save user's answer
    userAnswers[currentQuestionIndex] = option;
}

function handleNextQuestion() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Please select an answer before proceeding.");
        return;
    }
    
    currentQuestionIndex++;
    loadQuestion();
}

function submitQuiz() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Please select an answer before submitting.");
        return;
    }
    
    // Stop the timer
    clearInterval(timerInterval);
    quizEndTime = new Date();
    const timeTaken = seconds;
    const endTimestamp = quizEndTime.getTime();
    
    // Calculate score
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === selectedQuestions[index].correctAnswer) {
            score++;
        }
    });
    
    // Save results to Firebase
    const quizResult = {
        name: currentUser.name,
        score: score,
        timeTaken: timeTaken,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    
    database.ref('leaderboard').push(quizResult)
        .then(() => {
            // Show results section
            quizSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
            
            // Update results information
            resultName.textContent = currentUser.name;
            resultScore.textContent = score;
            resultTime.textContent = formatTime(timeTaken);
            
            // Display answer review
            displayAnswerReview();
            
            // Reload top performers
            loadTopPerformers();
        })
        .catch(error => {
            console.error("Error saving results:", error);
            alert("An error occurred while saving your results. Please try again.");
        });
}

// Function to display answer review
function displayAnswerReview() {
    // Clear previous content
    answerReviewContainer.innerHTML = '';
    
    // Create review items for each question
    selectedQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        // Question number and text
        const questionElement = document.createElement('div');
        questionElement.classList.add('review-question');
        questionElement.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}`;
        reviewItem.appendChild(questionElement);
        
        // User's answer
        const userAnswerElement = document.createElement('div');
        userAnswerElement.classList.add('review-answer');
        const isCorrect = userAnswers[index] === question.correctAnswer;
        userAnswerElement.innerHTML = `<strong>Your Answer:</strong> <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${userAnswers[index]}</span>`;
        reviewItem.appendChild(userAnswerElement);
        
        // Correct answer (only show if user's answer is wrong)
        if (!isCorrect) {
            const correctAnswerElement = document.createElement('div');
            correctAnswerElement.classList.add('review-correct-answer');
            correctAnswerElement.innerHTML = `<strong>Correct Answer:</strong> <span class="correct-answer">${question.correctAnswer}</span>`;
            reviewItem.appendChild(correctAnswerElement);
        }
        
        // Add review item to container
        answerReviewContainer.appendChild(reviewItem);
    });
}

function showLeaderboard() {
    // Hide all sections
    loginSection.classList.add('hidden');
    quizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    
    // Show leaderboard section
    leaderboardSection.classList.remove('hidden');
    
    // Load leaderboard data
    database.ref('leaderboard').orderByChild('score').once('value')
        .then(snapshot => {
            const leaderboardData = [];
            snapshot.forEach(childSnapshot => {
                leaderboardData.push(childSnapshot.val());
            });
            
            // Sort by score (descending) and then by time (ascending)
            leaderboardData.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return a.timeTaken - b.timeTaken;
            });
            
            // Display leaderboard
            leaderboardBody.innerHTML = '';
            leaderboardData.forEach((entry, index) => {
                const row = document.createElement('tr');
                
                const rankCell = document.createElement('td');
                rankCell.textContent = index + 1;
                
                const nameCell = document.createElement('td');
                nameCell.textContent = entry.name;
                
                const scoreCell = document.createElement('td');
                scoreCell.textContent = `${entry.score}/10`;
                
                const timeCell = document.createElement('td');
                timeCell.textContent = formatTime(entry.timeTaken);
                
                row.appendChild(rankCell);
                row.appendChild(nameCell);
                row.appendChild(scoreCell);
                row.appendChild(timeCell);
                
                leaderboardBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error loading leaderboard:", error);
        });
}

function goBackToLogin() {
    // Reset form fields
    nameInput.value = '';
    loginError.textContent = '';
    
    // Hide all sections except login
    quizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    leaderboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    
    // Reload top performers
    loadTopPerformers();
}