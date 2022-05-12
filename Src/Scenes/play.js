class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }
    preload(){
        this.load.image('player', 'Assets/rolypoly.png');
    }
    create(){
        this.rolly = this.physics.add.sprite(0, 0, 'player');
        this.rolly.
        this.physics.add.existing(this.add.rectangle(game.config.width / 2, game.config.height / 2, 100, 100, 0xffffff))
        .setImmovable();
    }
    update(){
        
    }
}