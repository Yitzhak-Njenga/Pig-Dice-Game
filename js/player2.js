var player2={
    totalpts:0,
    turnPts:0,
}

document.getElementById("p2-roll").addEventListener("click",p2Roll);
document.getElementById("p2-hold").addEventListener("click",p2Hold);


function p2Roll(){
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p2-roll-img").src = "images/dice" + rollNum + ".png";


    if(rollNum !=1 ){
        player2.turnPts += rollNum;
        document.getElementById("p2-turn-points").innerHTML =player2.turnPts;
    }else{
        player1.totalpts <= 0;
        alert( document.getElementById("name2").value + " " + "Lose");

    switchTurn();
       
    }

}

function p2Hold(){
    player1.totalpts += player1.turnPts;
    document.getElementById("p2-points").innerHTML = player2.totalpts;

   if(player2.totalpts >=50){
       alert( document.getElementById("name2").value + " " + "Wins");
       document.location.reload();
       
   }else{

    player2.turnPts = 0; 
    document.getElementById("p2-turn-points").innerHTML = 0;


    switchTurn();
   }
}

function switchTurn(){
    document.getElementById("p2-turn-points").innerHTML =player2.turnPts;
    document.getElementById("p1-header").classList.remove("active");
    document.getElementById("p2-header").classList.add("active");
    document.getElementById("p1-roll").disabled = true;
    document.getElementById("p1-hold").disabled = true;
    document.getElementById("p2-roll").disabled = false;
    document.getElementById("p2-hold").disabled = false;

}
