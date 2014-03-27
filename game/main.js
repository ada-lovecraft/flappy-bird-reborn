'use strict';

//global variables
var BootState, GameoverState, MenuState, PlayState, PreloadState, game;
window.onload = function () {
  game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

  // Game States
  
  game.state.add('boot', BootState);
  
  game.state.add('gameover', GameoverState);
  
  game.state.add('menu', MenuState);
  
  game.state.add('play', PlayState);
  
  game.state.add('preload', PreloadState);
  

  game.state.start('boot');
};