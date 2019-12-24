/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score0 = document.getElementById('score-0');
var current0 = document.getElementById('current-0');
var score1 = document.getElementById('score-1');
var current1 = document.getElementById('current-1');

//New Game Button

function newg() {

    score0.textContent = '0';
    current0.textContent = '0';
    score1.textContent = '0';
    current1.textContent = '0';

}

var newgame = document.querySelector('.btn-new');
newgame.addEventListener('click', newg );

var turn_start_score;

function holder() {

    var total;

    var current_player = document.querySelector('.active');

    if (current_player.classList.contains('player-0-panel')) {
        var other_player = document.querySelector('.player-1-panel');

        turn_start_score = current0.textContent;
        total = parseInt(score0.textContent, 10) + parseInt(current0.textContent, 10);
        score0.textContent = '0';
        current0.textContent = total;

    }
    else {
        var other_player = document.querySelector('.player-0-panel');

        turn_start_score = current1.textContent;
        total = parseInt(score1.textContent, 10) + parseInt(current1.textContent, 10);
        score1.textContent = '0';
        current1.textContent = total;
    }

    if (parseInt(current0.textContent, 10) >= 100) {
        alert('Player 1 Won!');
        newg();
    }
    if (parseInt(current1.textContent, 10) >= 100) {
        alert('Player 2 Won!');
        newg();
    }

    current_player.classList.replace('active', 'notactive');
    other_player.classList.replace('notactive', 'active');

}



//Hold Button
var hold = document.querySelector('.btn-hold');
hold.addEventListener('click', holder );

//rolldice
var rolldice = document.querySelector('.btn-roll');
rolldice.addEventListener('click', function() {

    var x = Math.floor((Math.random() * 6) + 1);

    var dice = document.querySelector('.dice');

    switch (x) {

      case 1:
        dice.setAttribute('src', 'dice-1.png');
        break;
      case 2:
        dice.setAttribute('src', 'dice-2.png');
        break;
      case 3:
        dice.setAttribute('src', 'dice-3.png');
        break;
      case 4:
        dice.setAttribute('src', 'dice-4.png');
        break;
      case 5:
        dice.setAttribute('src', 'dice-5.png');
        break;
      case 6:
        dice.setAttribute('src', 'dice-6.png');
    }

    var current_player = document.querySelector('.active');


    if( x === 1 ){
        if (current_player.classList.contains('player-0-panel')) {
            holder();
            current0.textContent=turn_start_score;
        }
        else {
            holder();
            current1.textContent=turn_start_score;
        }
    }
    else {
        if (current_player.classList.contains('player-0-panel')) {
            score0.textContent = parseInt(score0.textContent, 10) + x;
        }
        else {
            score1.textContent = parseInt(score1.textContent, 10) + x;
        }
    }

} );
