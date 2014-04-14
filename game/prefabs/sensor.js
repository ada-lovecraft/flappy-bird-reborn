'use strict';
var Sensor = function(game, x, y, width, height) {

  this.bmd = game.add.bitmapData(width, height);
  this.bmd.clear();
  this.bmd.ctx.beginPath();
  this.bmd.ctx.rect(0,0,width,height);
  this.bmd.ctx.fillStyle = 'white';
  this.bmd.ctx.fill();
  this.bmd.ctx.closePath();
  this.bmd.render();
  this.bmd.refreshBuffer();

  Phaser.Sprite.call(this, game, x,y, this.bmd);
  
  this.width = width;
  this.height = height;
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
  this.body.kinematic = true;
  this.name = 'sensor';
  // initialize your prefab here
  
};

Sensor.prototype = Object.create(Phaser.Sprite.prototype);
Sensor.prototype.constructor = Sensor;

Sensor.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

Sensor.prototype.createBody = function() {

};

module.exports = Sensor;
