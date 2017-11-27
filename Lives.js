class Lives
{
	constructor()
	{
		this.liveNum = 3;
		this.sprite = new Image();
		this.x = 60;
		this.y = 40;
		this.width = 20;
		this.height = 20;
		this.life = 0;
	}

	Draw()
	{
		for(this.life = 0; this.life <= this.liveNum; this.life = this.life + 1)
		{
			this.sprite.src = 'lifeSprite.png';
			app.ctx.drawImage(this.sprite,this.x,this.y,this.width, this.height);
			this.x += 60;
		}
	}
}