class GameOptions
{
	constructor()
	{
		this.x =0;
		this.y =0;
		this.width = window.innerWidth;
		this.height= window.innerHeight;

		this.gameOptSprite = new Image();
		this.buttonImg = new Image();

		this.DifficultyText = new Text();
		this.LivesText = new Text();
		this.backText = new Text();
		this.optionGame = new Text();

		this.liveNum = new Text();
		this.sprite = new Image();
		this.spriteImgTwo = new Image();
		this.spriteImgOne = new Image();

		this.spriteImgOne.src = "sprite.png"
		this.spriteImgTwo.src = "spriteTwo.png" 

		this.sprite = this.spriteImgTwo;
	}
	Draw()
	{
			//Drawing image 1
			this.gameOptSprite.src = 'soundScreen.jpg';
			this.buttonImg.src = 'button.png';

			//this.sprite = this.spriteImgOne;
			app.ctx.drawImage(this.gameOptSprite,this.x,this.y,this.width,this.height);

			app.ctx.drawImage(this.buttonImg,this.width/2 - 100,this.height/4 + 10, 20, 20); //sprite buttons
			app.ctx.drawImage(this.buttonImg,this.width/2 + 100,this.height/4 + 10, 20, 20);


			app.ctx.drawImage(this.buttonImg,this.width/2 - 100,this.height/2, 20, 20);	//lives buttons
			app.ctx.drawImage(this.buttonImg,this.width/2 + 100,this.height/2, 20, 20);



			app.ctx.drawImage(this.buttonImg, this.width - 130,this.height - 180, 100, 40);	//back button

			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "18px NONSTOP";
			app.ctx.fillStyle = "red";

			this.difficultyText = 'Sprite'
			this.livesText = 'Player lives'
			this.backText = 'Back'
			this.optionGame = 'Game Options'

			this.liveNum = "" + app.lives.liveNum;	//placeholders

			app.ctx.fillText(this.difficultyText,105, this.height/4 + 25);
			app.ctx.fillText(this.livesText,105,this.height/2 + 25);
			app.ctx.fillText(this.backText,this.width - 110 ,this.height - 155);

			app.ctx.drawImage(this.sprite,this.width/2 - 20,this.height/4 - 10, 60, 60);
			
			app.ctx.fillText(this.liveNum,this.width/2,this.height/2 + 15);

			app.ctx.fillText(this.optionGame,this.width/2 - 80 , 40);	//title
	}
	
	IncreaseLives()
	{
		if(app.lives.liveNum < 8)
		{
			app.lives.liveNum = app.lives.liveNum + 1;
		}

	}
	ChangeSprite()
	{
		app.ctx.clearRect(this.width/2 - 20, this.height/4 - 10, 60, 60);
		if(this.sprite == this.spriteImgOne)
		{
			console.log(1);
			app.player.sprite = app.player.playerSpriteTwo;
			this.sprite = this.spriteImgTwo;
			app.player.playerTexture = 1;
		}
		else if(this.sprite == this.spriteImgTwo)
		{
			console.log(2);

			app.player.sprite = app.player.playerSprite;
			this.sprite = this.spriteImgOne;
			app.player.playerTexture = 2;
		}

		
	}
	DecreaseLives()
	{
		if(app.lives.liveNum > 2)
		{
			app.lives.liveNum = app.lives.liveNum - 1;
		}

	}
}
