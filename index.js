

document.addEventListener('DOMContentLoaded', ()=>{

    let buttonStart = document.querySelector("button");
    colorChange();

    buttonStart.addEventListener("click",()=>{
        
        colorChange();
    })  
})
    
const colorChange = () =>{
    
    
    let nameColor = document.querySelector(".name-color")
    let body = document.querySelector("body");
    let randomWord = document.querySelector("span");

    nameColor.innerHTML = randomColorGenerator();
    nameColor.style.color = nameColor.innerHTML;
    document.body.style.backgroundColor = nameColor.innerHTML;
    randomWord.style.color = nameColor.innerHTML;
}

