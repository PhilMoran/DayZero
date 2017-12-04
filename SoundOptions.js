class SoundOptions
{
	constructor()
	{
		this.x =0;
		this.y =0;
		this.width = window.innerWidth;
		this.height= window.innerHeight;
		this.soundSprite = new Image();
		this.buttonImg = new Image();

		this.soundImg = new Image();
		this.muteImg = new Image();
		this.musicImg = new Image();
		this.effectImg = new Image();

		this.muteEffectText = new Text();
		this.muteMusicText = new Text();
		this.backText = new Text();
		this.optionSound = new Text();
	}

	Init()
	{
		this.soundSprite.src = 'soundScreen.jpg';
		this.buttonImg.src = 'button.png';
		this.soundImg.src = 'soundSymbol.png';
		this.muteImg.src = 'muteSymbol.png';

		this.effectImg = this.soundImg;
		this.musicImg = this.soundImg;

		this.muteEffectText = 'Mute Sound Effects'
		this.muteMusicText = 'Mute Music'
		this.backText = 'Back'
		this.optionSound = 'Sound Options'
	}

	Draw()
	{
			app.ctx.drawImage(this.soundSprite,this.x,this.y,this.width,this.height);

			app.ctx.drawImage(this.effectImg,400,this.height/4, 40, 40);
			app.ctx.drawImage(this.musicImg,400,this.height/2, 40, 40);

			app.ctx.drawImage(this.buttonImg,100,this.height/4, 260, 40);
			app.ctx.drawImage(this.buttonImg,100 ,this.height/2, 260, 40);
			app.ctx.drawImage(this.buttonImg, this.width - 130,this.height - 180, 100, 40);

			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "18px NONSTOP";
			app.ctx.fillStyle = "red";

			app.ctx.fillText(this.muteEffectText,105, this.height/4 + 25);
			app.ctx.fillText(this.muteMusicText,105,this.height/2 + 25);
			app.ctx.fillText(this.backText,this.width - 110 ,this.height - 155);
			app.ctx.fillText(this.optionSound,this.width/2 - 60 , 40);

	}
	// if soundOptions is not muted play sounds
	UpdateButton()
	{
		if(this.effectImg === this.soundImg)		
		{
			var audio = new Audio('click.wav');
			audio.play();
		}
	}

	Throw()
	{
		if(this.effectImg === this.soundImg)		
		{
			var audio = new Audio('throw.wav');
			audio.play();
		}
	}

	Jump()
	{
		if(this.effectImg === this.soundImg)		
		{
			var audio = new Audio('jump.wav');
			audio.play();
		}
	}

	Crouch()
	{
		if(this.effectImg === this.soundImg)		
		{
			var audio = new Audio('crouch.wav');
			audio.play();
		}
	}

	UpdateMusic()
	{
		if(this.musicImg === this.soundImg)		
		{
			var audio = new Audio('music.wav');
			audio.play();
		}
	}

	UpdateMusicImg()
	{
		if(this.musicImg === this.soundImg)
		{
			this.musicImg = this.muteImg;
		}
		else 
		{
			this.musicImg = this.soundImg;
		}
	}

	UpdateEffectImg()
	{
		if(this.effectImg === this.soundImg)
		{
			this.effectImg = this.muteImg;
		}
		else 
		{
			this.effectImg = this.soundImg;
		}
	}
}
