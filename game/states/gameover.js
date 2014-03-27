(function () {
  'use strict';
  function GameOver() {}
  
  GameOver.prototype = {
    preload: function () {

    },
    create: function () {
      var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
      this.titleText = game.add.text(game.world.centerX,100, 'Game Over!', style);
      this.titleText.anchor.setTo(0.5, 0.5);

      this.congratsText = game.add.text(game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
      this.congratsText.anchor.setTo(0.5, 0.5);

      this.instructionText = game.add.text(game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
      this.instructionText.anchor.setTo(0.5, 0.5);
    },
    update: function () {
      if(game.input.activePointer.justPressed()) {
        game.state.start('play');
      }
    }
  };
  GameoverState = GameOver;
}());