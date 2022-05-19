class Menu extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }
    preload() {
        this.load.image('mainmenu', 'assets/mainmenu.png');
        this.load.image('snail', 'assets/snail.png');
        this.load.image('rolypoly', 'assets/rolypoly.png');
        this.load.image('handIcon', '/assets/hand_c.png');
        this.load.image('circIcon', '/assets/circ_icon.png');
    }
    create() {
        console.log("menu");
        

        // Add background
        this.add.image(0, 0, 'mainmenu').setOrigin(0, 0);

        // Add snail sprite
        this.snail = this.add.sprite(175, 500, 'snail').setOrigin(0.5, 0.5);

        // Add roly poly sprite
        this.rolypoly = this.add.sprite(890, 500, 'rolypoly').setOrigin(0.5, 0.5);

        //Add touch screen icon
        this.circ = this.add.sprite(540, 500, 'circIcon').setOrigin(0.5, 0.5).setScale(.4);
        this.circ.alpha = 0.4;
        this.hand = this.add.sprite(580, 550, 'handIcon').setOrigin(0, 0).setScale(.4);

        //Add tween for touch icon
        this.add.tween({
            targets: [this.circ],
            duration: 450,
            scale: 0.5,
            yoyo: true,
            repeat: -1,
            ease: 'Sinusoidal'
        })

        // Add tween for snail
        this.add.tween({
            targets: [this.snail],
            duration: 300,
            x: this.snail.x + 5,
            y: this.snail.y - 5,
            angle: this.snail.angle - 10,
            yoyo: true,
            repeat: -1,
            ease: 'Sinusoidal',
        });

        // Add tween for roly poly
        this.add.tween({
            targets: [this.rolypoly],
            duration: 300,
            x: this.rolypoly.x + 5,
            y: this.rolypoly.y - 5,
            angle: this.rolypoly.angle - 10,
            yoyo: true,
            repeat: -1,
            ease: 'Sinusoidal',
        });

        // Add hitbox for play button
        let playButtonHitbox = this.add.rectangle(392, 429, 310, 160, "#FFF", 0).setOrigin(0);
        playButtonHitbox.setInteractive();
        playButtonHitbox.on("pointerdown", () => {
            this.scene.start("play");
        });
    }
}