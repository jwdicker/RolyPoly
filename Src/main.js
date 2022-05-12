let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    scene: [ Menu, Load, Play, EndScreen ],
    highscore: 0,
    currentScore: 0
};

// define game canvas
let game = new Phaser.Game(config);