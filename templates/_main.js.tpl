'use strict';

//global variables
var <%= _.pluck(gameStates,'stateName').join(', ') %>, game;
window.onload = function () {
  game = new Phaser.Game(<%= gameWidth %>, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>');

  // Game States
  <% _.forEach(gameStates, function(gameState) {  %>
  game.state.add('<%= gameState.shortName %>', <%= gameState.stateName %>);
  <% }); %>

  game.state.start('boot');
};