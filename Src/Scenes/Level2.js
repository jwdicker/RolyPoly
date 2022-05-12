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
        this.text = this.add.text(game.config.width/2, game.config.height/2, "That's good work!", textConfig);
        this.text = this.add.text(game.config.width/2, game.config.height/2, "Watch out for snails!", textConfig);
    }
}