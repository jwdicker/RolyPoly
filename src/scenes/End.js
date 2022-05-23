class End extends Phaser.Scene 
{
    constructor() 
    {
        super("End");
    }
    create()
        {
            let textConfig = {
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
            this.add.text(game.config.width/2, game.config.height/2, "Click to restart", textConfig).setOrigin(0.5);
            this.input.on("pointerdown", () => {
                this.scene.start("MenuScene");
            });
        }
}