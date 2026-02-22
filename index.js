const buttonElm = document.getElementById("button-elm")
const adviceText = document.getElementById("advice-text")
const adviceId = document.getElementById("advice-id")

buttonElm.addEventListener("click", showAdvice)

function showAdvice(){

    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {console.log(data)
                adviceText.innerHTML = `"${data.slip.advice}"`
                adviceId.innerHTML = `ADVICE #${data.slip.id}`
    })

}


