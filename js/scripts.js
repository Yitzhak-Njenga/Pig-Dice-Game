$(document).ready(function(){
    $("#play").click(function(){
      $("#section1").hide("first");
    });
    $("#play").click(function(){
      $("table").show("first");
    });
});

var player1={
    totalpts:0,
    turnPts:0,
}

document.getElementById("p1-roll").addEventListener("click",p1Roll);
document.getElementById("p1-hold").addEventListener("click",p1Hold);


function p1Roll(){
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p1-roll-img").src = "images/dice" + rollNum + ".png";

    if(rollNum !=1 ){
        player1.turnPts += rollNum;
        document.getElementById("p1-turn-points").innerHTML =player1.turnPts;
    }else{
        player1.totalpts <= 0;
        alert( document.getElementById("name1").value + " " + "Lose");
    }

}
function p1Hold(){
    player1.totalpts += player1.turnPts;
    document.getElementById("p1-points").innerHTML = player1.totalpts;

   if(player1.totalpts >=50){
       alert( document.getElementById("name1").value + " " + "Wins");
   }else{

    player1.turnPts = 0; 
    document.getElementById("p1-turn-points").innerHTML = 0;


    switchTurn();
   }
}




function switchTurn(){
    document.getElementById("p1-turn-points").innerHTML =player1.turnPts;
    document.getElementById("p1-header").classList.remove("active");
    document.getElementById("p2-header").classList.add("active");
    document.getElementById("p1-roll").disabled = true;
    document.getElementById("p1-hold").disabled = true;
    document.getElementById("p2-roll").disabled = false;
    document.getElementById("p2-hold").disabled = false;

}
 