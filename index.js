const buttonElm = document.getElementById("button-elm")
const adviceText = document.getElementById("advice-text")
const adviceId = document.getElementById("advice-id")

buttonElm.addEventListener("click", showAdvice)

async function showAdvice(){
    try{
         const response = await fetch("https://api.adviceslip.com/advice")
         if(!response.ok){
            throw Error ("Something went wrong")
         }
         const data = await response.json()
         console.log(data)
         adviceText.innerHTML = `"${data.slip.advice}"`
         adviceId.innerHTML = `ADVICE #${data.slip.id}`
    }catch(err){
        console.log(err)
    }  
}


