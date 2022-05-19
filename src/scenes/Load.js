class Load extends Phaser.Scene {
    constructor() {
        super("load");
    }

    preload(){
        // Menu scene
        this.load.image('mainmenu', 'assets/mainmenu.png');
        this.load.image('snail', 'assets/snail.png');
        this.load.image('rolypoly', 'assets/rolypoly.png');
        this.load.image('handIcon', '/assets/hand_c.png');
        this.load.image('circIcon', '/assets/circ_icon.png');

        // Play scene
        this.load.image("player", "Assets/rolypoly.png");
        this.load.image("slug", "Assets/slug.png");
        this.load.spritesheet('poly_anim', '/assets/rolypoly_animated.png', {frameWidth: 85, frameHeight: 70, startFrame: 0, endFrame: 11});

        // End scene
        this.load.image('victoryscreen', 'assets/victory.png');
    }

    create() {
        console.log("load");
        this.scene.start("MenuScene");
    }
}