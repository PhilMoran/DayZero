class passKey
{
	constructor()
	{
 		this.key;
 		this.x = -10;	/// + (2 * rand)
 		this.y = app.canvas.height - 400;
 		this.keyWidth = 106;
 		this.keyHeight = 154;
 		this.alive;
 		this.collect = false;
 		this.rand = Math.floor((Math.random() * 10000));
	}
	Init()
	{
		app.ctx = app.canvas.getContext("2d");
		this.key = new Image();
		this.key.src = "key.png";
		///this.rand = Math.Random(10000);
		this.x = app.canvas.width + this.rand;
		console.log("init");
	}

	Draw()
	{	
		if(this.collect === false)
		{		
			this.x -=5;
			console.log(this.x);
			if(this.x <= 0 - this.keyWidth)
			{
				app.lives.UpdateLives();
				this.x = app.canvas.width + Math.floor((Math.random() * 10000));
				
			}
			app.ctx.drawImage(this.key ,this.x ,this.y,this.keyWidth,this.keyHeight);
		}
		if(this.collect === true)	// if picked up draw a smaller version in corner of screen
		{		
			app.ctx.drawImage(this.key ,app.canvas.width - this.keyWidth ,app.canvas.height - this.keyHeight,this.keyWidth / 3 ,this.keyHeight / 3);
		}
	}
	ObstacleCollision()
	{
		if(app.player.x < this.x + this.keyWidth && app.player.x + app.player.playerWidth  > this.x && app.player.y > this.y - this.keyHeight && app.player.y - app.player.playerheight > this.y && app.player.crouched === false)
		{
			this.alive = false;
			this.collect = true;
		}

	}
};