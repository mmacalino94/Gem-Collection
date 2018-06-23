$(document).ready(function()  {
    var currencyValue=Math.floor(Math.random()*100+19)
    
    $("#randomNumber").text(currencyValue);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
   
    var score= 0; 
    var wins= 0;
    var losses = 0;
   
  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
 
  function reset()  {
        currencyValue=Math.floor(Math.random()*100+19);
        console.log(currencyValue)
        $("#randomNumber").text(currencyValue);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        score= 0;
        $("#finalTotal").text(score);
        } 
 
  function win()  {
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  
  function lose(){
  alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  
    $("#chaos").on ("click", function(){
      score = score + num1;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
            
          if (score == currencyValue){
            win();
          }
          else if ( score > currencyValue){
            lose();
          }   
    })  
    $("#wumpa").on ("click", function(){
      score = score + num2;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
          if (score == currencyValue){
            win();
          }
          else if ( score > currencyValue){
            lose();
          } 
    })  
    $("#coin").on ("click", function(){
      score = score + num3;
      console.log("New score= " + score);
      $("#finalTotal").text(score);
  
            if (score == currencyValue){
            win();
          }
          else if ( score > currencyValue){
            lose();
          } 
    })  
    $("#rupee").on ("click", function(){
      score = score + num4;
      console.log("New score= " + score);
      $("#finalTotal").text(score); 
        
            if (score == currencyValue){
            win();
          }
          else if ( score > currencyValue){
            lose();
          }
    });   
  }); 