//////Ths method runs only in browser
// var audio = new Audio('Aaoge Jab Tum.mp3');
// audio.play();


const player = require('play-sound')();
player.play('Aaoge Jab Tum.mp3', (err) => {
  if (err) {
    console.error("Error-----",err);
  }
});