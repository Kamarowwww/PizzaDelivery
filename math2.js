var a;
var b;
var symbol;
var answer;
var youranswer;
function randomInteger(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


function generate() {
    a = document.math.number1.value;
    b = document.math.number2.value;
    firstnumber = randomInteger(a, b);
    secondnumber = randomInteger(a, b);
    symbol = document.math.symbol.value;

    document.getElementById("result1").value = firstnumber + symbol + secondnumber;

}
function result() {
    switch (symbol) {
        case "+":
            {
                answer = firstnumber + secondnumber;
                break;
            }
        case "-":
            {
                answer = firstnumber - secondnumber;
                break;
            }
        case "/":
            {
                answer = firstnumber / secondnumber;
                break;
            }
        case "*":
            {
                answer = firstnumber * secondnumber;
                break;
            }

    }
    document.getElementById("result2").value = answer;


}
function match()
{ 
     youranswer=document.math.youranswer.value;
    if (youranswer==answer)
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
/*function countClicks() 
{            
    localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1; update();
}   
function update() 
{      
    target.innerHTML = localStorage.clickcount || 0;
}
   */
 
 
   /* function countClicks()
  {
    localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
    target.innerHTML = localStorage.clickcount || 0;
  }  
  function countClicks1()
  {
    localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
    target1.innerHTML = localStorage.clickcount || 0;
  }  */