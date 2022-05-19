class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    create(){
        this.background = this.add.image(0, 0, "background").setOrigin(0);

        this.isJumping = false;
        this.player = this.physics.add.sprite(8,game.config.height - 200,'poly_anim').setOrigin(0,0).setCollideWorldBounds();
        this.player.flipX = true;
        this.isJumping = false;
        this.player.setGravityY(400);
        //this.player.setVelocityY(4000);
        this.player.setVelocityX(100);

        this.slugs = this.physics.add.group({
            enable: true,
            gravityY: 400,
            velocityX: -100,
            collideWorldBounds: true
        });
        this.slugs.add(this.add.sprite(700, game.config.height - 100,'slug'));
        this.slugs.add(this.add.sprite(1000, game.config.height - 100,'slug'));
        this.physics.add.overlap(this.slugs, this.player, () => {
            if(!this.isJumping) {
                this.player.setVelocityX(0);
                this.player.anims.stop();
                this.slugs.setVelocityX(0);
                this.time.delayedCall(1000, () => {
                    this.scene.start("MenuScene");
                })
                
            }
        });

        this.anims.create({
            key: 'poly_walk',
            frames: this.anims.generateFrameNumbers('poly_anim', {start: 0, end: 4, first: 0}),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'poly_jump',
            frames: this.anims.generateFrameNumbers('poly_anim', {start: 5, end: 11, first: 5}),
            frameRate: 12,
            repeat: 0
        });

        this.player.anims.play('poly_walk');

    }

    update() {
        this.input.on("pointerdown", ()=> {
            if (!this.isJumping){
                this.player.anims.play('poly_jump');
                this.player.on('animationcomplete' , () => {
                    this.player.anims.play('poly_walk');
                })
                this.player.setVelocityY(-400);
                this.isJumping = true;
            }
            
        });

        if (this.player.body.onFloor()){
            this.isJumping = false;
        }

    }
    //this.ground = this.physics.add.group({immovable: true});
}

class Level1 extends Phaser.Scene 
{
    constructor() 
    {
        super("Level1Scene");
    }

    create()
    {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '40px',
            //backgroundColor: '#AA11AA',
            color: '#ED1C24',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'Watch out for slugs', menuConfig).setOrigin(0.5);
    }
}

class Level2 extends Phaser.Scene 
{
    constructor() {
        super("Level2Scene");
    }
    
    create()
    {
        this.textConfig = {
            fontFamily: 'Georgia',
            fontSize: '40px',
            //backgroundColor: '#AA11AA',
            color: '#ED1C24',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.text = this.add.text(game.config.width/2, game.config.height/2, "That's good work!", textConfig).setOrigin(0.5);;
        this.text2 = this.add.text(game.config.width/2, game.config.height/2, "Watch out for snails!", textConfig).setOrigin(0.5);;
    }
}

class Level3 extends Phaser.Scene 
{
    constructor() {
        super("Level3Scene");
    }
    
    create()
    {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '40px',
            //backgroundColor: '#AA11AA',
            color: '#ED1C24',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'Watch out for slugs' +  this.game.config.highScore, menuConfig).setOrigin(0.5);
    }
}