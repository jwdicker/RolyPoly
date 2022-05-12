class Playground extends Phaser.Scene {
    constructor() {
        super("playground");
    }

    preload(){
        this.load.image("player", "Assets/rolypoly.png");
        this.load.image("slug", "Assets/slug.png");
    }

    create(){
        this.player = this.physics.add.sprite(8,0,'player').setOrigin(0,0).setCollideWorldBounds();

        this.player.setGravityY(1);
        this.player.setVelocityY(4000);
        this.player.setVelocityX(100);

        this.slug1 =  this.physics.add.sprite(1000,600,'slug').setOrigin(0,0).setCollideWorldBounds();
        this.player.setGravityY(1);
        this.player.setVelocityY(4000);
        this.player.setVelocityX(-100);


        this.physics.add.collider(this.slug1, this.player);
        

    }
    //this.ground = this.physics.add.group({immovable: true});
    

}

let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    scene: [ Playground ],
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
