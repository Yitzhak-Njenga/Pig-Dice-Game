$(document).ready(function(){
    $("#play").click(function(){
      $("#section1").hide("first");
    });
    $("#play").click(function(){
      $("table").show("first");
    });
});


document.getElementById("p1-roll").addEventListener("click",p1Roll);
document.getElementById("p1-hold").addEventListener("click",p1hold);


function p1Roll(){
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p1-roll-img").src = "images/dice" + rollNum + ".png";

    if(rollNum !=1 ){
        player1.turnPts += rollNum;
        document.getElementById("p1-turn-points").innerHTML =player1.turnPts;
    } 

}
function p1hold(){
    player1.totalpts += player1.turnPts;
    document.getElementById("p1-points").innerHTML = player1.totalpts;

   if(player1.totalpts >=50){
       alert("Player One " + "" + document.getElementById("name").value);
   }else{

    player1.turnPts = 0; 
    document.getElementById("p1-turn-points").innerHTML = 0;


    switchTurn();
   }
}
 