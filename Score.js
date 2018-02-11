class Score
{
	constructor()
	{
		this.step = 0;
		this.score = 0;
		this.x = app.canvas.width - 200;
		this.y = 40;
		this.scoreText = new Text();
	}

	Draw()
	{

		if(this.score > 40)	// when score is implemented remove this and change level there
		{
			app.enemies.level = 2;	// drawn from game.js
		}
		if(this.score > 100 && app.key.collect === true)	
		{
			app.scenemanager.scene = 5;//Change To winGame
		}

		app.ctx = app.canvas.getContext("2d");
		app.ctx.font = "18px NONSTOP";
		app.ctx.fillStyle = "red";

		this.scoreText = 'Score: ' + this.score + " / 100";

		app.ctx.fillText(this.scoreText,this.x, this.y);
	}
	ProgressScore()
	{
		if(app.player.alive === true)
		{
			this.step++;
			if(this.step > 50)
			{
				this.score = this.score + 1;
				this.step = 0;
			}
		}
	}

	UpScore()
	{
		this.score += 10;
	}

	LoseScore()
	{
		this.score = 0;
	}

}