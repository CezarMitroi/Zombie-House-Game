//declare variables
let window1 = document.getElementById('window-1');
let window2 = document.getElementById('window-2');
let window3 = document.getElementById('window-3');
let startButton = document.getElementById('start');
let zombiePath = 'http://i63.tinypic.com/35k29w7.png';
let civillianPath = 'http://i65.tinypic.com/2ug2i2t.jpg';
let closedWindowPath = 'http://i63.tinypic.com/105p3cj.jpg';


let numClosedWindows = 3;
let openWindow1;
let openWindow2;
let openWindow3;
let currentlyPlaying = true;

const play = () => {
numClosedWindows--;
  if(numClosedWindows == 0){
  gameOver('win')
  }else if(bitten()){
    gameOver();
  }
}

//check click
const isClicked = (door) => {
  if(door.src == closedWindowPath){
    return false;
  }else{
    return true;
  }
}
//check bit
const bitten = () => {
  if( window1.src === zombiePath ||  window2.src === zombiePath || window3.src === zombiePath){
 return true;
  }else{
   return false;
 }
 }

//assign random number to windows
const randomNumber = () => {
  let window = Math.floor(Math.random()*numClosedWindows);
  if(window === 0){
    openWindow1 = zombiePath;
    openWindow2 = civillianPath;
    openWindow3 = civillianPath;
  } else if(window === 1){
    openWindow2 = zombiePath;
    openWindow1 = civillianPath;
    openWindow3 = civillianPath;
  } else{
    openWindow3 = zombiePath;
    openWindow1 = civillianPath;
    openWindow2 = civillianPath;
  }
}
//open windows
window1.onclick = () => {
  if(!isClicked(window1) && currentlyPlaying === true){
window1.src = openWindow1;
    play();
}
}
window2.onclick = () => {
   if(!isClicked(window2) && currentlyPlaying === true){      
   window2.src = openWindow2;
  play();
}
}
window3.onclick = () => {
  if(!isClicked(window3) && currentlyPlaying === true){
window3.src = openWindow3;
  play();
}
}
   
const startRound = () => {
   window1.src = closedWindowPath;
   window2.src = closedWindowPath; 
   window3.src = closedWindowPath;
  randomNumber();
  startButton.innerHTML = 'Good Luck'
  numClosedWindows = 3;
  currentlyPlaying = true;
}

startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}
  
  const gameOver = (status) => {
    if(status == 'win'){
      startButton.innerHTML = 'You win!<br>Play again?'
    }else{
      startButton.innerHTML = 'Game over!<br>Play again?'
    }
      currentlyPlaying = false;
  }
  startRound();
