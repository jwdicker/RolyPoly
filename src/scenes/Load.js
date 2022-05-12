class Load extends Phaser.Scene {
    constructor() {
        super("load");
    }

    create() {
        console.log("load");
        this.scene.start("MenuScene");
    }
}