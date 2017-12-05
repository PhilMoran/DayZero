class Lives
{
	constructor()
	{
		this.liveNum = 3;
		this.sprite = new Image();
		this.sprite.src = 'lifeSprite.png';
		this.x = 60;
		this.y = 40;
		this.width = 30;
		this.height = 30;
		this.life = 0;
	}

	Draw()
	{
		for(this.life === 0; this.life < this.liveNum; this.life = this.life + 1)
		{
			this.x += 60;
		}
		//if(this.life >)
		app.ctx.drawImage(this.sprite,this.x,this.y,this.width, this.height);
	}
	UpdateLives()
	{
		if(this.liveNum > 0)
		{
			//clear the rectangle
			this.liveNum = this.liveNum - 1;
		}
		else
		{
			app.scenemanager.scene = 4; // switch to game lose screen
		}
	}
}