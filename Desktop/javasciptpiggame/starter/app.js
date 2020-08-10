/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, rscore, player;
scores = [0, 0];
rscore = 0;
player = 0;
//dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function () { var dice;
                                                      dice = Math.floor(Math.random() * 6) + 1;
                                                      var d = document.querySelector('.dice');
                                                     d.style.display = 'block';                   
                                                     d.src = 'dice-' + dice + '.png'; 
if(dice !== 1)
{
    rscore = rscore+dice;
    document.querySelector('#current-' + player).textContent = rscore;

}
else{  
    if(player===0)
    {player=1;     }
else{
    player=0;
rscore=0;}
  document.getElementById('current-0').textContent=0;  
      document.getElementById('current-1').textContent=0; 
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
   
    
    document.querySelector('.btn-hold').addEventListener('click',function()
                                                        {scores[player] += rscore;
                                                         document.querySelector('#score-' + player).textContent = scores[player];
                                                         
                                                         if(scores[player]>=100)
                                                             { document.querySelector('#name-' + player).textContent = 'winner!!!';                    document.querySelector('.dice').style.display='none';                            document.querySelector('.player-' + player + '-panel').classList.add('winner');
                                                              document.querySelector('.player-' + player + '-panel').classList.remove('active');
                                                              
                                                                 
                                                             }
                                                         else{
                                                         
                                                         
                                                          if(player===0)
    {player=1;     }
else{
    player=0;
rscore=0;}
  document.getElementById('current-0').textContent=0;  
      document.getElementById('current-1').textContent=0; 
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
   
                                                         
                                                         
                                                           }
                                                         
document.querySelector('.btn-new').addEventListener('click',function(){
    scores = [0, 0];
rscore = 0;
player = 0;
     document.getElementById('current-0').textContent=0;  
      document.getElementById('current-1').textContent=0; 
    document.getElementById('score-0').textContent=0;  
      document.getElementById('score-1').textContent=0; 
      document.querySelector('.dice').style.display = 'none';
  
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
       document.querySelector('#name-0').textContent = 'player-1';   
        document.querySelector('#name-1').textContent = 'player-2';  
    

    
});                                                         
                                                     })   
                                                        
                                                        

    
}
                                                                          });

