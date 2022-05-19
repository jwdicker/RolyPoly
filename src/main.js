let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    scene: [Load, Menu, Play, Victory, Lose],
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