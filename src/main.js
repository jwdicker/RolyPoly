let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    scene: [ Menu, Level1, Level2, Level3, Victory, Lose ],
    highscore: 0,
    currentScore: 0
};

// define game canvas
let game = new Phaser.Game(config);