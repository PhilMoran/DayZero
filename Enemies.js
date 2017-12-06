class Enemies
{
	constructor()
	{
		this.img = [];
		this.speed = [];
		this.enemyNum = 20;

		this.enemyX = [];
		this.y = app.canvas.height - 195;
		this.width = 120;
		this.height = 120;

		this.imgX = 0;
		this.imgY = 0;
		this.imgWidth = 120;
		this.imgHeight = 120;

	}
	Init()
	{
		for(this.i = 0; this.i < this.enemyNum; this.i++)
		{
			this.img[this.i] = new Image();
			this.img[this.i].src = 'run.png';
			var rand = Math.floor((Math.random() * 400) + 1);
			this.enemyX[this.i] =  rand;

			var moveX = Math.floor((Math.random() * 3) + 1);
			this.speed[this.i] = moveX;
		}
	}

	Draw()
	{
		for(this.i = 0; this.i < this.enemyNum; this.i++)
		{
			app.ctx.drawImage(this.img[this.i],this.imgX, this.imgY, this.imgWidth, this.imgHeight, this.enemyX[this.i],this.y,this.width, this.height);
		}
		this.Update();
	}

	Animate()
	{

	}

	Update()
	{
		for(this.i = 0; this.i < this.enemyNum; this.i++)
		{
			this.enemyX[this.i] = this.enemyX[this.i] - this.speed[this.i]
			if(this.enemyX[this.i] + this.width < 0)
			{
				//var rand = Math.floor((Math.random() * 4000) + 1);
				this.enemyX[this.i] =  rand + app.canvas.width;
			}
		}
	}

}