class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }
    preload(){
        this.load.image('player', 'Assets/rolypoly.png');
    }
    create(){
        this.physics.add.sprite(0, 0, 'player');
        this.physics.add.rectangle(100, 100, 1000, 100, 0xffffff);
    }
    update(){
        
    }
}