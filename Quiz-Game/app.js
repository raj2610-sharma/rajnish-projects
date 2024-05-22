let questions = [
    {
        'que': 'Which of the following is markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'java-Script',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'What is the purpose of CSS in frontend development??',
        'a':'To define the logic and behavior of web pages.',
        'b':'To structure and organize the content of web pages.',
        'c':'To define the presentation and styling of web pages.',
        'd':'To manage server-side operations and database interactions',
        'correct':'c'
    },
    {
        'que': 'Which of the following is NOT a commonly used programming language for frontend development?',
        'a':'HTML',
        'b':'CSS',
        'c':'java-Script',
        'd':'PHP',
        'correct':'d'
    }
]
let index =0;
let total =questions.length;
let right = 0, wrong=0;
let queBox = document.querySelector(".queBox");
let optionInput = document.querySelectorAll(".options")
let btn = document.querySelector(".btn")
let loadQuestion = ()=>{
    if(index === total){
        return endquiz();
    }
    reset();
    let data = questions[index]
    
    queBox.innerHTML = `${index+1})${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
let submitQuiz= ()=>{
    let data = questions[index]
    let answere = getAns();
    if(answere === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

let getAns = () =>{
    let ans;
    optionInput.forEach((input)=>{
        if(input.checked){
            console.log(input.value)
           ans =input.value;
          

        }
        
    })
    return ans;
}
let reset = ()=>{
    optionInput.forEach(
        (input)=>{
            input.checked = false;
        }
    );
}

let endquiz = ()=>{
    document.querySelector(".box").innerHTML = `
    <div style = "text-align:center">
    <h3> Thanku for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2></div>`
}

btn.addEventListener("click",submitQuiz);
loadQuestion();




