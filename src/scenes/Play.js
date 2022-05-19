class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload(){
        this.load.image("player", "Assets/rolypoly.png");
        this.load.image("slug", "Assets/slug.png");
    }

    create(){

        this.isJumping = false;
        this.player = this.physics.add.sprite(8,0,'player').setOrigin(0,0).setCollideWorldBounds();
        this.player.setGravityY(400);
        //this.player.setVelocityY(4000);
        this.player.setVelocityX(100);

        this.slug1 =  this.physics.add.sprite(1000,600,'slug').setOrigin(0,0).setCollideWorldBounds();
        this.slug1.setGravityY(400);
        //this.player.setVelocityY(4000);
        this.slug1.setVelocityX(-100);
        
        this.physics.add.collider(this.slug1, this.player, () => {
            console.log("hit");
        });

        this.input.on("pointerdown", ()=> {
            if (!this.isJumping){
                this.player.setVelocityY(-400);
                this.isJumping = true;
            }
            
        })

    }

    update() {
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