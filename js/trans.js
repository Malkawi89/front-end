var boxjs = document.getElementsByClassName('box')[0]
console.log(boxjs)

function clickOnMove()
{
   boxjs.style.backgroundColor = "red"
   boxjs.style.color = "aqua"
   boxjs.innerHTML = "This is from js"
   boxjs.style.borderRadius = "50px"
   boxjs.style.height = "200px"
   boxjs.style.transform = " rotate(180deg) scale(-1) skew(10deg,10deg)"
   boxjs.style.fontSize = "40px" 
}

var calculate = document.getElementById('calculate')
calculate.addEventListener('submit',function(event)
{
   event.preventDefault();
   var number1 = document.getElementById('number1').value
   var number2 = document.getElementById('number2').value
   var op = document.getElementById('op').value
   

  switch(op)
  {
    case "+": var sum = parseInt(number1) + parseInt(number2)
   break
    case "-": var sum = parseInt(number1) - parseInt(number2)
    break
    case "*": var sum = parseInt(number1) * parseInt(number2)
   break
   default: var sum = parseInt(number1) / parseInt(number2)
   }

   var result = document.getElementById('result')
   result.innerHTML = sum
})

var primeF = document.getElementById('primeF')
primeF.addEventListener('submit',function(event)
{
event.preventDefault();
var primeOrNot = document.getElementById('primeOrNot').value
var isPrime = document.getElementById('isPrime')
for(var i = 2; i < parseInt(primeOrNot) ; i++)
{
   if(parseInt(primeOrNot) % i == 0)
   {
   isPrime.innerText = ('Not Prime')
    return
   }
   else
   {
      isPrime.innerText = ('Prime')
   }
}
})

