let next = $("#next") 
let prompts = $('#prompt')
let start = $('#start')
let submitGame = $('#submit')
let answerChoiceOne = $('#a1')
let answerChoiceTwo = $('#a2')
let answerChoiceThree = $('#a3')
let answerChoiceFour = $('#a4')


let userAns = []
let score = 0
let questionNumber = 0

//do i have to create an array for all the possible solutions?
//how do I get the userAns to compare to the objects?

let questions = [{
    prompt: "How many feet should you remain from another individaul during our current covid-19 outbrek?",
    answers: ["10 inches", "2 feet", "6 feet", "25 feet"],
    correctAnswerIndex: 2
  }, {
    prompt: "What weights more, 3 tons of gravel, or 3 tons of feathers?",
    answers: ["They weigh the same", "Feathers", "Gravel", "Dancing Banana"],
    correctAnswerIndex: 0
  },
  {
    prompt: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["All of the trees", "Roughly 12 tons", "Canada", "Around 35 cubic feet of dirt in the course of digging a burrow"],
    correctAnswerIndex: 3
  },
  {
    prompt: "What charactersitic is relatively constant in mitochondrial genomes across species?",
    answers: ["Content, type of genes", "Organization", "Size", "Joe"],
    correctAnswerIndex: 0
  },
  {
    prompt: " If Peter Piper picked a peck of pickled peppers, how man pickled peppers would Peter Piper pick??",
    answers: ["3 quarts", "8 quarts", "A large handful", "10 pecks"],
    correctAnswerIndex: 1
  }];


const startQuiz = () => {
    console.log('I\m starting now!')
    
    // grab the question, assign to html
    prompts.text(questions[0].prompt)

    // grab the answers for THIS question and assign to html
    answerChoiceOne.next().text(questions[0].answers[0])
    answerChoiceTwo.next().text(questions[0].answers[1])
    answerChoiceThree.next().text(questions[0].answers[2])
    answerChoiceFour.next().text(questions[0].answers[3])

    next.click(nextQuestion) //document.addEventListener('click', next)
}

const nextQuestion = () => {
    console.log('going to next question now!')
    console.log($('input[name=radio]:checked', '#form').val())
    userAns.push($('input[name=radio]:checked', '#form').val())

    $('input[name="radio"]').prop('checked', false);

    questionNumber++
    if (i = 0; i < questions.length; i++){
        //prompt the question 
    } else {
        //stop the prompt 
    }

//maybe remove the "next" since it's the last question???
    prompts.text(questions[questionNumber].prompt)
    answerChoiceOne.next().text(questions[questionNumber].answers[0])
    answerChoiceTwo.next().text(questions[questionNumber].answers[1])
    answerChoiceThree.next().text(questions[questionNumber].answers[2])
    answerChoiceFour.next().text(questions[questionNumber].answers[3])
}


// Add event listener to the start button
start.click(startQuiz)

// add event listener to submit button
// once you submit, or CLICK, run this function
// grab userAnswer array
// in a for loop, compare with answer key



// const process = () => {
    //    if(userAns[i] !== questions(correctAnswerIndex[i])) {
        //        return false 
        //        break;
        //     }
        //    else {
            //         return true
            //         score++
            //    }
            //    display(score)
            // }
            
            // I think this function will work better than the one above.. (needs to be a for loop)

            

//"submitGame" is connected to the id "submit" that is on the submit quiz button.
//not sure if i need, also it's not highlighted so something is wrong with this. 


// submitGame.click(process) 
// const process () => {
//         for (let score = 0; i < userAns.length; i++) {
//         if(userAns[i] !== questions(correctAnswerIndex[i])) {
//         break; 
//         }
//     else {
//         score++
//         }
//     }
//     display(score)
// }


//maybe this loop function instead??
const process= () => {
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i].correctAnswerIndex == userAns[i]) {
            score ++
        }
    }
    display(score)
}

submitGame.click(process) 

















