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