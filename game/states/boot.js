(function () {
  'use strict';

  function Boot() {
  }

  Boot.prototype = {
    preload: function() {
      this.load.image('preloader', 'assets/preloader.gif');
    },
    create: function() {
      game.input.maxPointers = 1;
      game.state.start('preload');
    }
  };

  BootState = Boot;
}());