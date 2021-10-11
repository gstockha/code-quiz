# code-quiz
https://gotad.io/code-quiz/
Created a simple quiz off the back of the script.js file. Created all files myself.
Time starts at 80 seconds and is decreased by 10 for every wrong answer.
The quiz ends when the questions (10) run out or you run out of time.
You're notified below if you had gotten the last question correct or incorrect.
From there, you'll be prompted to enter your name if you've completed the quiz, where it saves your score and name to an array and sends it to local storage in a JSON format. You'll then be shown previous scores and told to refresh.
Otherwise, if you run out of time, you'll just be shown the previous scores and told to restart.

I initialized the buttons and 2d questions array in the initQuiz function, triggered by a bool in the main newQuestions function.
This task was pretty straightforward. For improvement, we could use media queries in the style sheet for ease of use on mobile. Wasn't sure if this was necessary for the assignment.

![hw4](https://user-images.githubusercontent.com/54012873/136868292-3bd53113-2276-49fd-9508-3fbcf69e530c.png)
