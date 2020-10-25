$(document).ready(function(){
    $("#play").click(function(){
      $("#section1").hide("first");
    });
    $("#play").click(function(){
      $("table").show("first");
    });
});


document.getElementById("p1-roll").addEventListener("click",p1Roll);