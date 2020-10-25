var player2={
    totalpts:0,
    turnPts:0,
}

document.getElementById("p2-roll").addEventListener("click",p2Roll);


function p2Roll(){
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p2-roll-img").src = "images/dice" + rollNum + ".png";


}