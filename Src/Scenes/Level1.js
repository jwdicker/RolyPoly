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
        this.add.text(game.config.width/2, game.config.height/2, 'Watch out for slugs' +  this.game.config.highScore, menuConfig).setOrigin(0.5);
    }
}