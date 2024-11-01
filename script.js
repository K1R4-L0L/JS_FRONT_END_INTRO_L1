const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "orange", "green", "black", "blue","purple"];
    changeColorButton.addEventListener("click",() => {}
        const randomColor = colors[Math.floor(Math.random)()* colors.length)]; //errro in this line
        textElement.style.color = randomColor;
    });
}

changeTextColor();