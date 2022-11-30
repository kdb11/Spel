var characterJump = document.getElementById("character");
var image = document.getElementById("charImg");
var enemy = document.getElementById("object");
var points = document.getElementById("points");
var pts = 0;

function changeImg () {
    if(image.getAttribute('src') !== "Images/jump.png"){    
        image.src="Images/jump.png";
        setTimeout(function(){
            image.src="Images/run.png"
        }, 1000)
    }
}

function jump () {
    console.log("hoppFunc");
    if(!characterJump.classList.contains("animationJump")){
        characterJump.classList.add("animationJump");
        setTimeout(function(){
            characterJump.classList.remove("animationJump");
        }, 1000)
    }
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

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(characterJump).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"))
    if(blockLeft<20 &&
        blockLeft>0 &&
        characterTop>=400){
            window.location.reload();
            
        }
},10)

var getPts = setInterval(function(){
        pts += 100;
        points.innerHTML = pts;
},2000)

