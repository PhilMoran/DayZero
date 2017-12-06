class Player
{
	constructor()
	{
 		this.x = 100;
		this.y = app.canvas.height-180;
		this.x1 = 500;
		this.y1 = 200;
		this.width = 1536;
		this.height = 600; 
		this.alive = true;
		this.fps =0;
		this.fps2 =0;
		this.delay = 0;

		this.playerTexture = 0;
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
		this.groundX2 = this.width;
		this.groundY = app.canvas.height - 40;
		this.crouched = false;

	}
	Init()
	{
		app.ctx = app.canvas.getContext("2d");
		this.playerSprite.src = 'SpriteSheet.png';
		this.playerSpriteTwo.src = 'SpriteSheet1.png';

		this.sprite = this.playerSpriteTwo;
		this.groundSprite.src = 'ground.png';
		this.groundSprite2.src = 'ground.png';
	}
	LoadTexture()
	{
		if(this.playerTexture === 0)
		{
			this.sprite = this.playerSpriteTwo;
		}
		if(this.playerTexture === 1)
		{
			this.sprite = this.playerSprite;
		}
		if(this.playerTexture === 2)
		{
			this.sprite = this.playerSpriteTwo;
		}
	}
	//Function to draw the 2 sprites
	Draw()
	{
		if(this.alive === true)
		{
			//Clear the screen to be redrawn
			//app.ctx.clearRect(this.x, this.y, this.playerWidth, this.playerheight);
			//Drawing image 1
			app.ctx.drawImage(this.sprite,this.rightAnimation,this.direction,this.width/6,this.height/2,this.x,this.y,this.playerWidth,this.playerheight);
		}
		app.ctx.drawImage(this.groundSprite,this.groundX--,this.groundY,this.width,60);
		app.ctx.drawImage(this.groundSprite2,this.groundX2--,this.groundY,this.width,60);

		if(this.groundX+this.width<0)
		{
			this.groundX = this.width;
		}
		if(this.groundX2+this.width<0)
		{
			this.groundX2 =  this.width;
		}
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
			this.Crouch();
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
		if(this.crouched === true)
		{
			this.playerheight = this.playerheight / 2;
			this.y = this.y +this.playerheight/1.1;
		}
		if(this.crouched === false)
		{

			this.playerheight = 180;
			this.y = app.canvas.height - 195;
		}
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
