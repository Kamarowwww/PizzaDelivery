var firstnumber;
var secondnumber;
var symbol;

function randomInteger(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


function generate() {
   var a = document.math.number1.value;
   var b = document.math.number2.value;
    firstnumber = randomInteger(a, b);
	secondnumber = randomInteger(a, b);
	while (!isRandomNumberValid(secondnumber)) {
	console.log("secondnumber", secondnumber);
    		secondnumber = randomInteger(a, b);
	}
    symbol = document.math.symbol.value;
    document.getElementById("result1").value = firstnumber + symbol + secondnumber;
    document.getElementById("youranswer").disabled = false;
    document.getElementById("number1").disabled = true;
	document.getElementById("number2").disabled = true;
}

function checkResult(){
	var correctAnswer = getCorrectAnswer();
	var userAnswer =document.math.youranswer.value;
	checkIfMatches(correctAnswer, userAnswer);
	document.getElementById("result2").value = correctAnswer;
}

function getCorrectAnswer() {
	var correctAnswer = null;
    switch (symbol) {
        case "+":
            {
                correctAnswer = firstnumber + secondnumber;
                break;
            }
        case "-":
            {
                correctAnswer = firstnumber - secondnumber;
                break;
            }
        case "/":
            {
                correctAnswer = firstnumber / secondnumber;
                break;
            }
        case "*":
            {
                correctAnswer = firstnumber * secondnumber;
                break;
            }
    }
	return correctAnswer;

}
function isRandomNumberValid(number)
{
	if(symbol == "/" && number==0)
	{
		return false;
	}
	return true;
}

function onAnswerChange() {
	if (document.getElementById("youranswer").value !== "") {
		document.getElementById("fBf").disabled = false;
	}
}

function checkIfMatches(firstNumber, secondNumber)
{ 
     
    if (firstNumber==secondNumber)
    {
        alert('true');
		
        localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
        target.innerHTML = localStorage.clickcount || 0;
    }
    else
    {
        alert('false');
     
        localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
        target1.innerHTML = localStorage.clickcount || 0;
    }
}