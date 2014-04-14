'use strict';


<% _.forEach(gameStates, function(gameState) { %>var <%= gameState.stateName %> = require('./states/<%= gameState.shortName %>');
<% }); %>
var game = new Phaser.Game(<%= gameWidth %>, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>');

// Game States
<% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', <%= gameState.stateName %>);
<% }); %>

game.state.start('boot');

  