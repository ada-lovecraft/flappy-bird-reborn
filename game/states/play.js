(function() {
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      // start the phaser arcade physics engine
      game.physics.startSystem(Phaser.Physics.ARCADE);

      // give our world an initial gravity of 0
      game.physics.arcade.gravity.y = 0;

      // add the background sprite
      this.background = game.add.sprite(0,0,'background');

      // add the ground sprite as a tile
      // and start scrolling in the negative x direction
      this.ground = game.add.tileSprite(0,400, 335,112,'ground');
      this.ground.autoScroll(-200,0);

      // enable physics on the ground sprite
      // this is needed for collision detection
      game.physics.arcade.enableBody(this.ground);
      
      // we don't want the ground's body
      // to be affected by gravity or external forces
      this.ground.body.allowGravity = false;
      this.ground.body.immovable = true;


      // add the bird prefab 
      this.bird = new Bird(game, 100, game.height/2);
      game.add.existing(this.bird);
      
      // disable gravity on the bird
      // until the game is started
      this.bird.body.allowGravity = false;


      // create the ready group and add the
      // instructions and get ready sprites
      this.readyGroup = this.add.group();
      this.readyGroup.add(this.add.sprite(game.width/2 + 50 ,game.height/2,'instructions'));
      this.readyGroup.add(this.add.sprite(game.width/2,100,'getReady'));
      this.readyGroup.setAll('anchor.x',0.5);
      this.readyGroup.setAll('anchor.y',0.5);

      // add keyboard controls
      var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      flapKey.onDown.addOnce(this.startGame, this);
      flapKey.onDown.add(this.bird.flap, this.bird);

      // keep the spacebar from propogating up to the browser
      game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
      
      // add mouse/touch controls
      this.input.onDown.addOnce(this.startGame, this);
      this.input.onDown.add(this.bird.flap, this.bird);

    },
    startGame: function() {
      // give the world some -serious- gravity
      game.physics.arcade.gravity.y = 1200;
      // kill all of the sprites in the ready group
      this.readyGroup.callAll('kill');
      this.bird.revive();
    },

    update: function() {
      // this function runs for every frame
      game.physics.arcade.collide(this.ground, this.bird, this.groundHit, null, this);
    },
    groundHit: function() {
      console.debug('groundHit');
    },
    render: function() {
    }
  };

  PlayState = Play;
}());