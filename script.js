var characterJump = document.getElementById("character");
var image = document.getElementById("charImg");

function changeImg () {
    image.src="Images/jump.png";
    setTimeout(function(){
        image.src="Images/run.png"
    }, 1000)
}

function jump () {
    console.log("hoppFunc");
    characterJump.classList.add("animationJump");
    setTimeout(function(){
        characterJump.classList.remove("animationJump");
    }, 1000)
}

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
        case "w":
        case " ":
            console.log("hopp");
            jump();
            changeImg();
        break;
    }
})