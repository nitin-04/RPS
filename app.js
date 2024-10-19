// Initialize scores for the user and the computer
let userScore = 0;
let compScore = 0;

// Select necessary DOM elements
const choices = document.querySelectorAll(".choice"); // All choice buttons
const msg = document.querySelector("#msg"); // Message display area
const userScorePara = document.querySelector("#user-score"); // User score display
const compScorePara = document.querySelector("#comp-score"); // Computer score display

// Possible choices for the computer
const OPTIONS = ["rock", "paper", "scissors"];
const OPTIONS_COUNT = OPTIONS.length; // Total number of options

// Function to generate a random choice for the computer
const genCompChoice = () => {
    const randIdx = Math.floor(Math.random() * OPTIONS_COUNT); // Generate random index
    return OPTIONS[randIdx]; // Return random choice
}

// Function to handle a draw scenario
const drawGame = () => {
    msg.innerText = "Game Was Draw! Play Again"; // Display draw message
    msg.style.backgroundColor = "#5558af"; // Change background color for draw
} 

// Function to display the winner and update scores
const showWinner = (isUserWin, userChoice, compChoice) => {
    if (isUserWin) { // Check if user wins
        userScore++; // Increment user score
        userScorePara.innerText = userScore; // Update displayed user score
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; // Display win message
        msg.style.backgroundColor = "green"; // Change background color for win
    } else { // If user doesn't win, computer wins
        compScore++; // Increment computer score
        compScorePara.innerText = compScore; // Update displayed computer score
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`; // Display lose message
        msg.style.backgroundColor = "red"; // Change background color for loss
    }
}

// Main game function to process the user's choice
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Generate computer's choice
    
    if (userChoice === compChoice) { // Check for draw
        drawGame(); // Handle draw scenario
    } else {
        let isUserWin; // Variable to determine if the user wins
        
        // Determine if the user wins based on their choice and computer's choice
        if (userChoice === "rock") {
            isUserWin = compChoice !== "paper"; // Rock loses to Paper
        } else if (userChoice === "paper") {
            isUserWin = compChoice !== "scissors"; // Paper loses to Scissors
        } else {
            isUserWin = compChoice !== "rock"; // Scissors lose to Rock
        }
        showWinner(isUserWin, userChoice, compChoice); // Show the result of the game
    }
};

// Add event listeners to each choice button for user interaction
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get user's choice from button ID
        if (OPTIONS.includes(userChoice)) { // Check if the choice is valid
            playGame(userChoice); // Start the game with the user's choice
        }
    });
});
