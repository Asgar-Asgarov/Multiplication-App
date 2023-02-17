const num1 = Math.ceil(Math.random()*10);
const num2 =Math.ceil(Math.random()*10);

const questionEl = document.getElementById('question');
const inputEl=document.getElementById('input');
const formEl=document.getElementById('form');
const scorEl = document.getElementById('score');


questionEl.innerText=`What is ${num1} multiply by ${num2} ?`



let   score = localStorage.getItem("score");

formEl.addEventListener("submit",()=>{
    const userAnswer = +inputEl.value
    let correctAns = num1*num2;
   if (correctAns===userAnswer) {
     score++
     localStorage.setItem("score",JSON.stringify(score));
   }
   else{
    score--
    localStorage.setItem("score",JSON.stringify(score));
   }
    })


    scorEl.innerText=`score: ${score}`


