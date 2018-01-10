class GameOver
{
	constructor()
	{
		this.x =0;
		this.y =0;
		this.width = window.innerWidth;
		this.height= window.innerHeight;
		this.endSprite = new Image();
		this.buttonImg = new Image();
		this.menuText = new Text();
		this.quitText = new Text();
		this.titleText = new Text();

		this.scroll =this.height + 40;
		this.credits = new Text();
	}
	Draw()
	{
			//Drawing image 1
			this.endSprite.src = 'endScreen.jpg';
			this.buttonImg.src = 'button.png';

			app.ctx.drawImage(this.endSprite,this.x,this.y,this.width,this.height);
			app.ctx.drawImage(this.buttonImg, this.width - 300, this.height - 120, 200, 60);
			app.ctx.drawImage(this.buttonImg, this.width - 300, this.height - 240, 200, 60);

			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "40px NONSTOP";
			app.ctx.fillStyle = "red";

			this.titleText = 'DayZero'
			this.menuText = 'Menu'
			this.quitText = 'Quit'
			this.credits = 'Created by David Price & Phillip Moran';

			app.ctx.fillText(this.titleText,this.width/2 - 100, 100);
			app.ctx.fillText(this.menuText, this.width - 260, this.height - 200);
			app.ctx.fillText(this.quitText, this.width - 260, this.height - 80);
	}

	Update()
	{
		if(this.scroll > 250)
		{
			app.ctx.fillText(this.credits,this.width/3 ,this.scroll--);
		}
		else
		{
			app.ctx.fillText(this.credits,this.width/3 ,250);
			app.ctx.fillText(this.credits,this.width/4 ,this.scroll--);
		}
	}
}
