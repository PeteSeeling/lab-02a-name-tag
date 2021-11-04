const inputel=document.getElementById ('input')
const buttonel=document.getElementById ('button')
const outputel=document.getElementById('output')
console.log(inputel)
console.log(buttonel)
console.log(outputel)

buttonel.addEventListener( 'click', ()=>{
    //need value of input
    const userType=inputel.value
    //need to inject value of input into nameel
    console.log(userType)
    outputel.textContent=userType
})