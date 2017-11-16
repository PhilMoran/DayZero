class MainMenu
{
	constructor()
	{
		this.x =0;
		this.y =0;
		this.width = 1280;
		this.height=720;
		this.menuSprite = new Image();
	}
	Draw()
	{
			//Drawing image 1
			app.ctx = app.canvas.getContext("2d");
			this.menuSprite.src = 'mainMenu.jpg';
			app.ctx.drawImage(this.menuSprite,this.x,this.y,this.width,this.height);

	}
}
