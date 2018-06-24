$(document).ready(function()  {
    
    var score= 0; 
    var wins= 0;
    var losses = 0;

    var currencyValue=Math.floor(Math.random()*100+19)
    
    $("#randomNumber").text(currencyValue);
    
    var ringPoint= Math.floor(Math.random()*11+1)
    var wumpaPoint= Math.floor(Math.random()*11+1)
    var coinPoint= Math.floor(Math.random()*11+1)
    var rupeePoint= Math.floor(Math.random()*11+1)
   
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
 
  function reset()  {
        currencyValue=Math.floor(Math.random()*100+19);
        console.log(currencyValue)
        $("#randomNumber").text(currencyValue);
        ringPoint= Math.floor(Math.random()*11+1);
        wumpaPoint= Math.floor(Math.random()*11+1);
        coinPoint= Math.floor(Math.random()*11+1);
        rupeePoint= Math.floor(Math.random()*11+1);
        score= 0;
        $("#finalTotal").text(score);
        } 
 
  function win()  {
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  
  function lose() {
  alert ("Awww Try again...");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  
    $("#ring").on("click", function() {
      score = score + ringPoint;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
            
          if (score == currencyValue) {
            win();
          }
          else if ( score > currencyValue)  {
            lose();
          }   
    })  
    $("#wumpa").on("click", function()  {
      score = score + wumpaPoint;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
          if (score == currencyValue){
            win();
          }
          else if ( score > currencyValue)  {
            lose();
          } 
    })  
    $("#coin").on("click", function() {
      score = score + coinPoint;
      console.log("New score= " + score);
      $("#finalTotal").text(score);
  
            if (score == currencyValue) {
            win();
          }
          else if ( score > currencyValue)  {
            lose();
          } 
    })  
    $("#rupee").on("click", function()  {
      score = score + rupeePoint;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
        
            if (score == currencyValue) {
            win();
          }
          else if ( score > currencyValue)  {
            lose();
          }
    });   
  }); 