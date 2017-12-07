class Enemies
{
	constructor()
	{
		this.img = [];
		this.speed = [];
		this.enemyNum = 20;

		this.enemyX = app.canvas.width + 40;	// need an array of xPositions
		this.y = app.canvas.height - 155;
		this.width = 720;
		this.height = 120;

		this.imgX = 720;
		this.imgY = 0;
		this.imgWidth = 120;
		this.imgHeight = 120;
		this.count = 0;

		this.speed = 3;
		this.level = 1;

	}
	Init()
	{
		for(this.i = 0; this.i < this.enemyNum; this.i++)
		{
			this.img[this.i] = new Image();
			this.img[this.i].src = 'run.png';
		}
	}

	Draw()
	{
		if(this.enemyX < 0)
		{
			var moveX = Math.floor((Math.random() * 7) + 1);
			this.speed = moveX;

			var rand = Math.floor((Math.random() * 400) + 1);
			this.enemyX =  app.canvas.width + 100 + rand;
		}

		for(this.i = 0; this.i < this.enemyNum; this.i++)
		{
			app.ctx.drawImage(this.img[this.i],this.imgX, this.imgY, this.imgWidth, this.imgHeight, this.enemyX,this.y,this.width/6, this.height);	// array of images drawn on top of each other 
			console.log(this.enemyX);
		}
		this.enemyX = this.enemyX - this.speed;
		this.EnemyCollision();
	}

	Animate(dt)
	{
		//Controls speed of animation
		this.fps += 8;
    	if (this.fps >= this.ticksPerFrame/dt) {			// this isnt working here thats why count is used under
        	this.fps = 0;
			this.imgX -= 120;
		}	

		
		//Reset the frame locations.
		if(this.imgX === 0)
		{
			this.imgX =720;
		}
		
		if(this.count > 10)
		{
			this.imgX -= 120;
			this.count = 0;
		}
		this.count++;
	}

	EnemyCollision()
	{
		if(app.player.x < this.enemyX + this.imgWidth && app.player.x + app.player.playerWidth  > this.enemyX && app.player.y > this.y - this.imgHeight && app.player.y - app.player.playerheight > this.y && app.player.crouched === false)
		{
			
			app.lives.UpdateLives();
			this.enemyX = -400;
		}

	}

}