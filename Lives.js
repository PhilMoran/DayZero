class Lives
{
	constructor()
	{
		this.sprite = [];
		this.posX = [];
		this.liveNum = 3;
		this.x = 60;
		this.y = 40;
		this.width = 30;
		this.height = 30;
		this.life = 0;
	}
	Init()
	{
		for(this.i = 0; this.i < this.liveNum; this.i++)
		{
			this.sprite[this.i] = new Image();
			this.sprite[this.i].src = 'lifeSprite.png';
			this.posX[this.i] = this.i * this.x + 60;
		}
	}
	Draw()
	{
		for(this.i = 0; this.i < this.liveNum; this.i++)
		{
			app.ctx.drawImage(this.sprite[this.i],this.posX[this.i],this.y,this.width, this.height);
		}
	}
	UpdateLives()
	{
		if(this.liveNum > 1)
		{
			//clear the rectangle
			this.liveNum = this.liveNum - 1;
		}
		else
		{
			app.scenemanager.scene = 4; // switch to game lose screen
			this.liveNum = 3;
		}
	}
}