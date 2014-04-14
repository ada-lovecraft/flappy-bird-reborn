'use strict';

var BirdDemo = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);
  this.anchor.setTo(0.5, 0.5);
  this.animations.add('flap');
  this.animations.add('quickflap',[0,1,2,1,0,1,2,1,0]);
  this.animations.play('flap', 12, true);
  

  // enable physics on the bird
  // and disable gravity on the bird
  // until the game is started
  game.physics.arcade.enableBody(this);

  // disable gravity on the bird until it is revived
  this.body.allowGravity = false;

  // the bird isn't "alive" until the game has started
  this.alive = false;

  // add a listener for the 'onRevived' event
  this.events.onRevived.add(this.revived, this)
  
};

BirdDemo.prototype = Object.create(Phaser.Sprite.prototype);
BirdDemo.prototype.constructor = BirdDemo;

BirdDemo.prototype.update = function() {
  if(this.alive) {
    // rotate the bird toward the ground on every update
    if(this.angle < 90) {
      this.angle += 2.5;
    }
  }
};

BirdDemo.prototype.flap = function() {
  //cause our bird to "jump" upward
  this.body.velocity.y = -400;
  // rotate the bird to -40 degrees
  game.add.tween(this).to({angle: -40}, 100).start();
  // play the flap animation
  this.animations.play('quickflap', 24, false);
};

BirdDemo.prototype.revived = function() {
  // called when we revive the bird
  this.body.allowGravity = true;
  this.animations.stop();
};


