class Player
{
	constructor()
	{
 		this.x = 200;
		this.y = 200;
		this.x1 = 500;
		this.y1 = 200;
		this.width = 1536;
		this.height = 600; 
		this.alive = true;
		this.fps =0;
		this.fps2 =0;
		this.delay = 0;
		this.playerSprite = new Image();
		this.secondSprite = new Image();
		this.spriteAnimation = 0;
		this.rightAnimation =0;
		this.leftAnimation =0;
		this.ticksPerFrame = 1000;
		this.direction =0;
		this.playerWidth = 150;
		this.playerheight = 250; 


		this.groundSprite = new Image();
		this.groundX = 0;
		this.groundY = app.canvas.height - 40;

	}
	//Function to draw the 2 sprites
	Draw()
	{
		if(this.alive === true)
		{
			//Clear the screen to be redrawn
			app.ctx.clearRect(0, 0, 1920, 1080);

			//Drawing image 1
			app.ctx = app.canvas.getContext("2d");
			this.playerSprite.src = 'SpriteSheet.png';
			app.ctx.drawImage(this.playerSprite,this.rightAnimation,this.direction,this.width/6,this.height/2,this.x,this.y,this.playerWidth,this.playerheight);

			//Drawing image 2
			app.ctx = app.canvas.getContext("2d");
			this.secondSprite.src = 'SpriteSheet.png';
			app.ctx.drawImage(this.secondSprite,this.leftAnimation,this.direction,this.width/6,this.height/2,this.x1,this.y1,this.playerWidth,this.playerheight);

		}
		this.groundSprite.src = 'ground.png';
		app.ctx.drawImage(this.groundSprite,this.groundX,this.groundY,this.width,60);


	}
	//Function to animate sprite
	Animate(dt)
	{
		//Controls speed of animation
		this.fps += 8;
		this.fps2 += 15;

		//If statement to control cycling through the frames
		if (this.fps2 >= this.ticksPerFrame/dt) {
        	this.fps2 = 0;
			this.leftAnimation += 256;
			
		}
    	if (this.fps >= this.ticksPerFrame/dt) {
        	this.fps = 0;
			this.rightAnimation += 256;
		}	

		
		//Reset the frame locations.
		if(this.rightAnimation >= this.width)
		{
			this.rightAnimation =0;
		}

		if(this.leftAnimation >= this.width)
		{
			this.leftAnimation =0;
		}

	}
	
};
