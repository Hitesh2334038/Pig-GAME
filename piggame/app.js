// var score1=0;
// var score2=0;
var scores,roundScore,activePlayer,gameplaying;
 scores=[0,0];
 roundScore=0;
activePlayer=0;

 gameplaying=true;

// document.querySelector("#current-"+activePlayer).textContent=dice;
//document.querySelector("#current-"+activePlayer).innerHTML="<em>"+dice+"</em>";
// var x=document.querySelector("#score-0").textContent;
// console.log(x);
//dice cha pic displa nahi pahije so tya sathi css change kela js mhdhe
document.querySelector(".dice").style.display='none';
//ya madhe pahile sarv value 0 karun ghethle
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
 document.getElementById('name-1').textContent='Player 2';

//roll button var click kela ki kay zal pahije
document.querySelector(".btn-roll").addEventListener('click',function(){
if(gameplaying){
  //apn tya dice che num change karto
    var dice=Math.floor(Math.random()*6)+1;
  //ata dice aplyala disla pahije na click kela ki so tya sathi event selector ghethla ani yane
  //yath  apn css change karu shakto ani html pan using js
    var diceDOM=  document.querySelector(".dice");
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';

  //score update karaych jo parynth 1 padath nahi
  if(dice!==1){
    //add score
    //tya current box mdhe value add karath gelo jo parynth 1 padath nahi
    roundScore+=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;

  }else{
    //next player
    activePlayer===0?activePlayer=1:activePlayer=0;
    //1 padla tr parath 0 pasun suru score hoil
    roundScore=0;

    document.getElementById("current-0").textContent='0';
      document.getElementById("current-1").textContent='0';
      //1 padla tr to active vala timb nighun jail dusryavar yeil
      //toggel use karaych
      // document.querySelector('.player-0-panel').classList.remove('active');
      //   document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
  }
}

});
//hold dabla ki to varti global la add zala pahije
document.querySelector('.btn-hold').addEventListener('click',function(){
if(gameplaying)
{
  //current score global la add kar
scores[activePlayer]+=roundScore;
//tya chya var print zal pahije
document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];


  //play win zala tr kay zal pahije te
  //next player
  activePlayer===0?activePlayer=1:activePlayer=0;
  //1 padla tr parath 0 pasun suru score hoil
  roundScore=0;

  document.getElementById("current-0").textContent='0';
    document.getElementById("current-1").textContent='0';
    //1 padla tr to active vala timb nighun jail dusryavar yeil
    //toggel use karaych
    // document.querySelector('.player-0-panel').classList.remove('active');
    //   document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style.display='none';
      //check active player asel tyacha score 100 kiva tychya peksha jasth asel tr winner asel
      if(scores[activePlayer]>=15){
        document.querySelector('#name-'+activePlayer).textContent="Winner!";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player'+activePlayer+'-panel').classList.add('winner');
          document.querySelector('.player'+activePlayer+'-panel').classList.remove('active');
        gameplaying=false;
      }
      else {

        activePlayer===0?activePlayer=1:activePlayer=0;
        //1 padla tr parath 0 pasun suru score hoil
        roundScore=0;

        document.getElementById("current-0").textContent='0';
          document.getElementById("current-1").textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
      }
}
});

document.querySelector('.btn-new').addEventListener('click',function(){
  scores=[0,0];
  roundScore=0;
 activePlayer=0;
  gameplaying=true;
 document.querySelector(".dice").style.display='none';

 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
 document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
});
