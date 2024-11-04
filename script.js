const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "orange", "green", "black", "blue","purple"];
    changeColorButton.addEventListener("click",() => {
        const randomColor = colors[Math.floor (Math.random() * colors.length)]; //errro in this line
        textElement.style.color = randomColor;
    });
} 

const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const image = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YoZfO_4zz3gp8o8wFbvNcv8zcVSQyje__TF-tPj9bFI3PG0L:https://static.displate.com/270x380/displate/2023-07-07/36564f7949ef83fec3743ccd3bbcabc2_20665b5530dd3d5737abad41cda98d27.jpg&s",
        "https://static.wikia.nocookie.net/silly-cat/images/3/35/CuhBG.png/revision/latest?cb=20231025181331",
        "https://static.wikia.nocookie.net/silly-cat/images/3/33/Noopy.png/revision/latest?cb=20231201205915",
        "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRSaPwCwDTsG4TsuIBwSQgee9RJuN8jto7Ju8FcoBrayMmqFvEr88guYR9Lal3LPjvBw:https://preview.redd.it/silly-cat-v0-ket76730w05a1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc3e02999215de3c516ea3f27d5b19ad63e6a5d5c&usqp=CAU"
    ];
    
    let currentIndex = 0;
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % image.length;
        pictureElement.src = images[currentIndex];
    });    
}

changePicture()