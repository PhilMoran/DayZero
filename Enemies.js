class Enemies
{
	constructor()
	{
		this.img = [];
		this.speed = [];
		this.enemyNum = 1 ;

		this.knock = new Image();
 		this.knock.src = "KnockedDown.png";
 		this.fall = false;
 		this.fallX = 0;
 		this.fallWidth = 120;
 		this.alive = true;
		this.enemyX = app.canvas.width + 40;	// need an array of xPositions
		this.y = app.canvas.height - 155;
		this.width = 600;
		this.height = 120;

		this.ticksPerFrame = 1000;
		this.imgX = 720;
		this.imgY = 0;
		this.step = 0;
		this.imgWidth = 120;
		this.imgHeight = 120;
		this.count = 0;
		this.fps = 0;
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
			var moveX = Math.floor((Math.random() * 4) + 1);
			this.speed = moveX;

			var rand = Math.floor((Math.random() * 400) + 1);
			this.enemyX =  app.canvas.width + 100 + rand;
		}

		if(this.fall === false)
 		{
 			for(this.i = 0; this.i < this.enemyNum; this.i++)
 			{
 				app.ctx.drawImage(this.img[this.i],this.imgX, this.imgY, this.imgWidth, this.imgHeight, this.enemyX,this.y,this.width/6, this.height);	// array of images drawn on top of each other 
 			}
 			this.enemyX = this.enemyX - this.speed;
 		}
 		if(this.fall === true)
 		{
 			app.particles.update();
			for(this.i = 0; this.i < this.enemyNum; this.i++)
  			{
 				app.ctx.drawImage(this.knock,this.fallX, this.imgY, this.fallWidth, this.imgHeight, this.enemyX,this.y,this.width/6, this.height);	// array of images drawn on top of each other 
 				this.step++;
 				if(this.step > 20)
 				{
 					this.fallX = 130;
 					console.log("STEP");
 				}
 				if(this.step > 50)
 				{
 					this.UpdatePosition();
 				}
 			}
 		}
 			//app.ctx.drawImage(this.img[this.i],this.imgX, this.imgY, this.imgWidth, this.imgHeight, this.enemyX,this.y,this.width/6, this.height);	// array of images drawn on top of each other 
 			this.enemyX = this.enemyX - this.speed;
  			this.EnemyCollision();
  	}

	UpdatePosition()
 	{
 		this.enemyX = - 400;
 		app.score.UpScore();
 		this.alive = true;
 		this.fall = false;
 		this.step = 0;
 		app.particles.reset();
 		//this.Draw();
 	}
 

	Animate(dt)
	{		
		this.fps += 8;
    	if (this.fps >= this.ticksPerFrame/dt) {			// this isnt working here thats why count is used under
        	this.fps = 0;
			this.imgX -= 120;
		}	
		//Reset the frame locations.
		if(this.imgX <= 0)
		{
			this.imgX =600;
		}
	}

	EnemyCollision()
	{
		if(app.player.x < this.enemyX + this.imgWidth && app.player.x + app.player.playerWidth  > this.enemyX && app.player.y < this.y + this.imgHeight && app.player.y + app.player.playerheight > this.y && this.alive === true)
		{
			app.lives.UpdateLives();
			this.enemyX = -400;
			this.step = 0;
			this.fallX = 0;
 			this.fall = false;
		}

	}

}