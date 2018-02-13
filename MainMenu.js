class MainMenu
{
	constructor()
	{
		this.x =0;
		this.y =0;
		this.width = window.innerWidth;
		this.height= window.innerHeight;
		this.menuSprite = new Image();
		this.buttonImg = new Image();
		this.multiText = new Text();
		this.playText = new Text();
		this.soundText = new Text();
		this.quitText = new Text();
	}
	Draw()
	{
			//Drawing image 1
			this.menuSprite.src = 'bossImg.jpg';
			this.buttonImg.src = 'button.png';

			app.ctx.drawImage(this.menuSprite,this.x,this.y,this.width,this.height);
			app.ctx.drawImage(this.buttonImg,100,this.height - 760, 300, 60);
			app.ctx.drawImage(this.buttonImg,100,this.height - 620, 300, 60);
			app.ctx.drawImage(this.buttonImg,100,this.height - 460, 420, 60);
			app.ctx.drawImage(this.buttonImg,100,this.height - 300, 420, 60);
			app.ctx.drawImage(this.buttonImg,100,this.height - 140, 300, 60);

			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "40px NONSTOP";
			app.ctx.fillStyle = "red";

			this.playText = 'Play';
			this.multiText = 'Multiplayer';
			this.gameText = 'Sound Options';
			this.soundText = 'Game Options';
			this.quitText = 'Quit';

			app.ctx.fillText(this.playText,130,this.height - 720);
			app.ctx.fillText(this.multiText,130,this.height - 580);
			app.ctx.fillText(this.gameText,130,this.height - 420);
			app.ctx.fillText(this.soundText,130,this.height - 260);
			app.ctx.fillText(this.quitText,130,this.height - 100);

	}

}
