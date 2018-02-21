class Obstacles
{
	constructor()
	{
 		this.boxObstacle = [];
 		this.x = app.canvas.width ;
 		this.y = app.canvas.height - 400;
 		this.boxWidth = 400;
 		this.boxHeight = 400;

 		this.deskObstacle = [];
 		this.deskHeight = 300;
 		this.deskWidth = 400;
 		this.randomObj = 0;

 		this.emptyDeskObstacle = [];
 		this.deskHeight = 400;
 		this.deskWidth = 400;
 		this.randomObj = 0;

 		this.crouchObstacle = new Image();
 		this.crouchHeight = 855;
 		this.crouchWidth = 140;
 		this.crouchFrameWidth = 0;

 		this.box = false;


	}
	Init()
	{
		app.ctx = app.canvas.getContext("2d");
		for(this.i = 0; this.i<3; this.i++)
		{
		this.boxObstacle[this.i] = new Image();
		this.boxObstacle[this.i].src = "Images/boxes.png";
		}
		for(this.i = 0; this.i<3; this.i++)
		{
		this.deskObstacle[this.i] = new Image();
		this.deskObstacle[this.i].src = "Images/Desk.png";
		}
		for(this.i = 0; this.i<3; this.i++)
		{
		this.emptyDeskObstacle[this.i] = new Image();
		this.emptyDeskObstacle[this.i].src = "Images/Desk2.png";
		}
		this.crouchObstacle.src = "Images/Electricity.png";
		console.log("init");
	}

	//Function to draw the 2 sprites
	Draw()
	{			

				this.x -=5;
				if(this.x < app.canvas.width /1.2)
				{
					this.box = true;
				}
				if(this.x <= 0 - this.deskWidth)
				{
					this.randomObj = Math.floor((Math.random() * 3));
					this.box = false;
					//console.log(this.randomObj);
					this.x = app.canvas.width + Math.floor((Math.random() * 1000));
				}
				if(this.randomObj === 0)
				{
				app.ctx.drawImage(this.boxObstacle[0] ,this.x ,this.y,this.boxWidth,this.boxHeight);
				}
				if(this.randomObj === 1)
				{
				app.ctx.drawImage(this.deskObstacle[0] ,this.x ,this.y,this.deskWidth,this.deskHeight);
				}
				if(this.randomObj === 2)
				{
				app.ctx.drawImage(this.emptyDeskObstacle[0] ,this.x ,this.y,this.deskWidth,this.deskHeight);
				}
				if(this.randomObj === 3)
				{
					app.ctx.drawImage(this.crouchObstacle ,this.crouchFrameWidth ,0,this.crouchWidth,this.crouchHeight,0,0,1024,585);
				}
	}
	ObstacleCollision()
	{
		if(app.player.x < this.x + this.deskWidth && app.player.x + app.player.playerWidth  > this.x && app.player.y > this.y - this.deskHeight && app.player.y - app.player.playerheight > this.y && app.player.crouched === false)
		{
			
			app.lives.UpdateLives();
			this.x = -400;
		}

	}
};