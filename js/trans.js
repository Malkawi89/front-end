var boxjs = document.getElementsByClassName('box')[0]
console.log(boxjs)

function clickOnMove()
{
   boxjs.style.backgroundColor = "red"
   boxjs.style.color = "aqua"
   boxjs.innerHTML = "This is from js"
   boxjs.style.borderRadius = "50px"
   boxjs.style.height = "200px"
   boxjs.style.transform = " rotate(180deg) scale(-2) skew(10deg,10deg)"
   boxjs.style.fontSize = "40px" 
}

var calculate = document.getElementById('calculate')
calculate.addEventListener('submit',function(event){
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

var calculate2 = document.getElementById('calculate2')
calculate2.addEventListener('submit',function(event){
   event.preventDefault();
   var number3 = document.getElementById('number3').value
   var number4 = document.getElementById('number4').value
   var sup = parseInt(number3) - parseInt(number4)
   var result2 = document.getElementById('result2')
   result2.innerHTML = sup
})