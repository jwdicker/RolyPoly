class Victory extends Phaser.Scene 
{
    constructor() 
    {
        super("VictoryScene");
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
            this.victoryText = this.add.text(game.config.width/2, game.config.height/2, "Victory", textConfig).setOrigin(0.5);
            this.returnToToTitle = this.add.text(game.config.width/2, game.config.height/2, "Click here to restart", textConfig).setOrigin(0.5);
            this.returnToToTitle.setActive();
            this.returnToToTitle.on("pointerdown", () => {
                this.play("Level1Scene");
            });
        }
}