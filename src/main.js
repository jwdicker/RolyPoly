let config = {
    type: Phaser.CANVAS,
    width: 1080,
    height: 720,
    scene: [Load, Menu, Play, End],
    highscore: 0,
    currentScore: 0,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: true
        }
    }
}

// define game canvas
let game = new Phaser.Game(config);
