module.exports = {
  game: {
    width: 288,
    height: 505,
    scrollSpeed: -200,
    gravity: 1200
  },
  background: {
    position: {
      x: 0,
      y: 0
    }
  },
  ground: {
    position: {
      x: 0,
      y: 400
    },
    dimensions: {
      width: 335,
      height: 112
    }
  },
  pipes: {
    range: {
      minY: -140,
      maxY: 140 
    },
    generator: {
      frequency: 1.5 // in seconds
    }
  },
  bird: {
    position: {
      x: 100,
      y: 252
    },
    fall: {
      maxAngle: 90,
      angleStep: 2.5
    },
    flap: {
      velocity: -400,
      angle: -40,
      tweenDuration: 100
    },
    animation: {
      fps: 12
    }
  }
}