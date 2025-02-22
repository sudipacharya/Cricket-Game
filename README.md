# Bat Ball Stump Game

**Bat Ball Stump Game** is a simple interactive game where users can choose between a bat, ball, or stump, and compete against the computer. The computer makes a random choice, and the result is determined based on both the user's and the computer's selections.

## Features
- Interactive game with user and computer choices
- Options for the user to choose: Bat, Ball, or Stump
- Random selection by the computer
- Immediate feedback on the result (win, lose, tie)
- Simple and engaging interface

## Technologies Used
- HTML for the structure
- CSS for styling
- JavaScript for functionality and logic

## How to Play
1. **Open the Game**: Open `index.html` in your web browser to start the game.
2. **Choose an Option**: Click on one of the buttons: "Ball", "Bat", or "Stump" to make your choice.
3. **Computer's Turn**: The computer will randomly choose one of the three options.
4. **Result**: An alert will display the choices made by both you and the computer, along with the result (win, lose, or tie).

## How It Works
- When you click on a button (Ball, Bat, or Stump), the game assigns your choice and randomly selects an option for the computer.
- The game logic then compares your choice with the computer's choice to determine the result. Let's say your choice is:
  - **Ball**: If the computer chooses Ball, it's a Tie match. If the computer chooses Stump, you win. If the computer chooses Bat, the computer wins.
  - **Bat**: If the computer chooses Ball, you win. If the computer chooses Stump, the computer wins. If the computer chooses Bat, it's a Tie match.
  - **Stump**: If the computer chooses Ball, the computer wins. If the computer chooses Stump, it's a Tie match. If the computer chooses Bat, you win.
- The result is displayed in an alert box showing the choices made by both you and the computer and the outcome of the game.
