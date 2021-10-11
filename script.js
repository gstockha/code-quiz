var listEl = [document.querySelector("#question1")];
var promptEl = document.querySelector("h1");
var timeEl = document.querySelector("h3");
var qlistEL = document.querySelector("ul");
var footEl = document.querySelector("h4");
var startBlurb = true; //init info screen
var timeLeft = 100;
var qList = [];
var correctNum = -1;
var timer;

function newQuestions(event){
    if (!startBlurb){ //if we've initialized buttons and question array
        if (qList.length > 0){ //if there are questions left
            if (correctNum != -1){ //if answered question attempt
                let eid = event.target.getAttribute("num");
                if (correctNum == eid) footEl.textContent = "Correct!";
                else{ //incorrect
                    footEl.textContent = "Incorrect!";
                    timeLeft -= 9; //subtract time (1 less because of settimer subtraction)
                    clearInterval(timer);
                    setTimer();
                }
            }
            let randIndex = Math.floor(Math.random() * qList.length);
            promptEl.textContent = qList[randIndex][5]; //new question
            correctNum = qList[randIndex][0] + 1;
            for (let i = 0; i < 4; i++){
                listEl[i].textContent = (i + 1).toString() + ". " + qList[randIndex][i+1];
            }
            qList.splice(randIndex,1); //remove from array
        }
        else{
            clearInterval(timer);
            endQuiz();
        }
    }
    else initQuiz();
}

function initQuiz(){
    startBlurb = false;
    qList = [ //convention is 4 answers, followed by the correct index, followed by the question prompt (so 6 indices total)
        [3,"Numbers","Arrays","Strings","All of the above","Which data types can an Array hold?"],
        [1,"Parentheses","Square","Explanation Points","Curly","What type of brackets do Arrays use in JavaScript?"],
        [2,"<javascript>","<code>","<script>","<js>","Which HTML element does JavaScript go in?"],
        [0,"Wildcard","Root","Joker","Miscellaneous",'"*" represents what in CSS?'],
        [3,"Design Object Model","Document Orientation Machine","Domain Objection Machine","Document Object Model",'What does "DOM" stand for?'],
        [2,"<script>'name'</script>","<script name='name'>","<script src='name'>","<script: 'name'>","What is the correct way to refer to a script in HTML?"],
        [2,"function func(){...}","var func() = function(){...}","Both 1 & 2","None of the above","What are some ways to define Functions in JavaScript?"],
        [1,"for (i < x; i++; var i = 0){...}","for (var i = 0; i < x; i++){...}","for (var i = 0, i < x, i++){...}","for (i++; var i = 0; i < x){...}",'How do you write a "for-loop" in JavaScript?'],
        [0,"A function passed as an argument or option","A function only defined anonymously","A function that calls itself","A variable passed as an argument for a function",'What is a "callback"?'],
        [4,"JSON()","JSON.parse()","JSON.append()","JSON.stringify()","How do you make an Object JSON-friendly?"]
    ];
    timer = setInterval(setTimer,1000); //set timer every 1 sec
    timeEl.textContent = "Time left: " + timeLeft.toString();
    let nuButton;
    let nuID;
    qlistEL.removeChild(listEl[0]);
    for (var i = 0; i < 4; i++){ //create 3 new buttons and add listeners to them
        nuID = "question" + (i+1).toString();
        nuButton = document.createElement("li");
        nuButton.id = nuID;
        nuButton.innerHTML = "<span></span>";
        nuButton.setAttribute("num",i+1);
        qlistEL.appendChild(nuButton);
        listEl[i] = document.querySelector('#'+nuID);
        listEl[i].addEventListener("click", newQuestions);
    }
    newQuestions(false);
}

function setTimer(){
    timeLeft --;
    clearInterval(timer);
    if (timeLeft > -1){
        timeEl.textContent = "Time left: " + timeLeft.toString();
        timer = setInterval(setTimer,1000); //set timer every 1 sec
    }
    else endQuiz();
}

function endQuiz(){
    timeLeft = 0;
    timeEl.textContent = "TIME'S UP!";
}

listEl[0].addEventListener("click", newQuestions);