 //initialise click so the user doesnt click more than 5times
var clicks= 0
var roundScore = 0;

 function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1 
    document.querySelector('.dice').setAttribute('src', 'dice-' + randomNumber + '.png')
    document.getElementById('dice-value').innerHTML = randomNumber 
    ++clicks;
    roundScore += randomNumber;
        if (clicks==5) {
            document.querySelector('.btn-roll').setAttribute('disabled','')
            document.querySelector('.total-score',).textContent=roundScore;

            if (roundScore >= 25) {
                document.querySelector('.result').textContent='YOU WIN!'; 
            } else {
                document.querySelector('.result').textContent='YOU LOSE!'; 
            }
        }      
    }         
//reset game
$(document).ready(function(){  
    $('#reset').click(function() { 
        location.reload(true);
    })
})