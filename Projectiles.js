class Projectiles
{
	constructor()
	{
		this.projectileImg = [];
		this.x = [];
    	this.y = [];
    	this.width = 20;
    	this.height = 20;
    	this.alive = []
		this.randomProjectile = 0;
		this.bulletNum = 0;

	}
	Init()
	{
		for(this.i = 0; this.i<200;this.i++)
		{
			this.projectileImg[this.i] = new Image();
			this.projectileImg[this.i].src = "Desk.png";
			this.x[this.i] = app.player.x + 40;
    		this.y[this.i] = app.player.y + 40;
    		this.alive[this.i] = false;
		}
        
     
       
	}

	Draw()
	{
		if(this.alive[this.bulletNum] === true)
		{
		 app.ctx.drawImage(this.projectileImg[this.bulletNum],this.x[this.bulletNum],this.y[this.bulletNum],this.width,this.height);
		}

	}

	Fire()
	{
		
		if(this.x[this.bulletNum] > 1000)
        {
            this.alive[this.bulletNum] = 0;
            this.x[this.bulletNum] = app.player.x + 40;
    		this.y[this.bulletNum] = app.player.y + 40;
        }
        if(this.bulletNum ===199)
        {
        	this.bulletNum = 0;
        }
		if(this.alive[this.bulletNum] === true)
		{
			this.Draw();
			this.x[this.bulletNum]+=10;
			this.y[this.bulletNum]+=0.3;
		}
		console.log(this.bulletNum);
	}
	BulletCollision()
	{
		if(app.enemies.enemyX< this.x[this.bulletNum] + this.width && app.enemies.enemyX + app.enemies.width  > this.x[this.bulletNum] && app.enemies.y < this.y[this.bulletNum] + this.height && app.enemies.y + app.enemies.height > this.y[this.bulletNum] && this.alive[this.bulletNum] === true)
		{
			
			app.enemies.alive = false;
			this.alive[this.bulletNum] = false;
			//app.enemies.UpdatePosition();
 			app.enemies.fall = true;
			console.log("Collision");
			//Particle and Enemy dies code;
		}
		//if(app.obstacles.x< this.x[this.bulletNum] + this.width && app.obstacles.x + app.obstacles.deskWidth  > this.x[this.bulletNum] && app.obstacles.y < this.y[this.bulletNum] + this.height && app.obstacles.y + app.obstacles.deskHeight > this.y[this.bulletNum])
		//{
			//this.alive[this.bulletNum] = false;
			//console.log("Collision");
			//Particle Code
		//}
	}

}