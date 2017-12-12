class WinGame
{
	constructor()
	{
		this.x =0;
		this.y =0;

		this.scoreX = app.canvas.width/3;
		this.scoreY = app.canvas.height/3;
		this.width = window.innerWidth;
		this.height= window.innerHeight;

		this.gameWinSprite = new Image();
		this.buttonImg = new Image();

		this.WinText = new Text();
		this.quitText = new Text();
		this.menuText = new Text();
		this.scoreText = new Text();



	}
	Draw()
	{
			//Drawing image 1
			this.gameWinSprite.src = 'building.png';
			this.buttonImg.src = 'button.png';

			app.ctx.drawImage(this.gameWinSprite,this.x,this.y,this.width,this.height);

			app.ctx.drawImage(this.buttonImg, this.width - 300, this.height - 120, 200, 60);
			app.ctx.drawImage(this.buttonImg, this.width - 300, this.height - 240, 200, 60);

			
			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "40px NONSTOP";
			app.ctx.fillStyle = "red";

			this.titleText = 'DayZero'
			this.menuText = 'Menu'
			this.quitText = 'Quit'

			this.scoreText = 'Your score is: ' + app.score.score;

			app.ctx.fillText(this.scoreText,this.scoreX, this.scoreY);
			app.ctx.fillText(this.titleText,this.width/2 - 100, 100);
			app.ctx.fillText(this.menuText, this.width - 260, this.height - 200);
			app.ctx.fillText(this.quitText, this.width - 260, this.height - 80);
	}
}
	