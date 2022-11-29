var characterJump = document.getElementById("character");

function jump () {
    console.log("hoppFunc");
    characterJump.classList.add("animationJump");
    setTimeout(function(){
        characterJump.classList.remove("animationJump");
    }, 1100)
}

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "arrowUp":
        case "w":
        case "space":
            console.log("hopp");
            jump();
        break;
        
        
    }
})