$(document).ready(function(){
    $("#play").click(function(){
      $("#section1").hide("first");
    });
    $("#play").click(function(){
      $("table").show("first");
    });
});


document.getElementById("p1-roll").addEventListener("click",p1Roll);


function p1Roll(){
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p1-roll-img").src = "images/dice" + rollNum + ".png";

    if(rollNum !=1 ){
        player1.turnPts += rollNum;
        document.getElementById("p1-turn-points").innerHTML =player1.turnPts;
    } 

}