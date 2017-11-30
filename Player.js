class Player
{
	constructor()
	{
 		this.x = 100;
		this.y = app.canvas.height - 195;
		this.x1 = 500;
		this.y1 = 200;
		this.width = 1536;
		this.height = 600; 
		this.alive = true;
		this.fps =0;
		this.fps2 =0;
		this.delay = 0;

		this.playerSprite = new Image();
		this.playerSpriteTwo = new Image();
		this.sprite = new Image();
		this.spriteAnimation = 0;
		this.rightAnimation =0;

		this.ticksPerFrame = 1000;
		this.direction =0;
		this.playerWidth = 100;
		this.playerheight = 180; 


		this.groundSprite = new Image();
		this.groundSprite2 = new Image();
		this.groundX = 0;
		this.groundX2 = app.canvas.width - 10;
		this.groundY = app.canvas.height - 40;

	}
	Init()
	{
		app.ctx = app.canvas.getContext("2d");
		this.playerSprite.src = 'SpriteSheet.png';
		this.playerSpriteTwo.src = 'SpriteSheet1.png';

		this.sprite = this.playerSprite;

		this.groundSprite.src = 'ground.png';
		this.groundSprite2.src = 'ground.png';
	}

	//Function to draw the 2 sprites
	Draw()
	{
		if(this.alive === true)
		{
			//Clear the screen to be redrawn
			app.ctx.clearRect(this.x, this.y, this.playerWidth, this.playerheight);
			//Drawing image 1
			app.ctx.drawImage(this.sprite,this.rightAnimation,this.direction,this.width/6,this.height/2,this.x,this.y,this.playerWidth,this.playerheight);
		}
		app.ctx.drawImage(this.groundSprite,this.groundX--,this.groundY,this.width,60);
		app.ctx.drawImage(this.groundSprite2,this.groundX2,this.groundY,this.width,60);


	}
	TouchUp()	//called from touch class
	{
		if(this.y = app.canvas.height - 195)
		{
			this.Jump();
		}
	}

	TouchDown()
	{
		if(this.y = app.canvas.height - 195)
		{
			this.Crouch();
		}
	}

	TouchDown()
	{
		if(this.y = app.canvas.height - 195)
		{
			this.Shoot();
		}
	}

	Jump()
	{
		this.y -= 20;
	}

	Crouch()
	{
		// change sprite and height 
	}


	Shoot()
	{
		// fire projectile
	}



	//Function to animate sprite
	Animate(dt)
	{
		//Controls speed of animation
		this.fps += 8;
    	if (this.fps >= this.ticksPerFrame/dt) {
        	this.fps = 0;
			this.rightAnimation += 256;
		}	

		
		//Reset the frame locations.
		if(this.rightAnimation >= this.width)
		{
			this.rightAnimation =0;
		}
	}
	
};
