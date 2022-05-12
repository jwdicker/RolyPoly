let config = {
    type: Phaser.CANVAS,
    width: 1080,
    height: 720,
    autoCenter: true,
    scene: [ Menu, Load, Play, EndScreen ],
    highscore: 0,
    currentScore: 0
};

// define game canvas
let game = new Phaser.Game(config);