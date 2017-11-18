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

		this.muteEffectText = new Text();
		this.muteMusicText = new Text();
		this.backText = new Text();
		this.optionSound = new Text();
	}
	Draw()
	{
			//Drawing image 1
			this.soundSprite.src = 'soundScreen.jpg';
			this.buttonImg.src = 'button.png';
			this.soundImg.src = 'soundSymbol.png';
			this.muteImg.src = 'muteSymbol.png';

			app.ctx.drawImage(this.soundSprite,this.x,this.y,this.width,this.height);

			app.ctx.drawImage(this.soundImg,400,this.height/4, 40, 40);
			app.ctx.drawImage(this.muteImg,400,this.height/2, 40, 40);

			app.ctx.drawImage(this.buttonImg,100,this.height/4, 260, 40);
			app.ctx.drawImage(this.buttonImg,100 ,this.height/2, 260, 40);
			app.ctx.drawImage(this.buttonImg, this.width - 130,this.height - 180, 100, 40);

			app.ctx = app.canvas.getContext("2d");
			app.ctx.font = "18px NONSTOP";
			app.ctx.fillStyle = "red";

			this.muteEffectText = 'Mute Sound Effects'
			this.muteMusicText = 'Mute Music'
			this.backText = 'Back'
			this.optionSound = 'Sound Options'

			app.ctx.fillText(this.muteEffectText,105, this.height/4 + 25);
			app.ctx.fillText(this.muteMusicText,105,this.height/2 + 25);
			app.ctx.fillText(this.backText,this.width - 110 ,this.height - 155);
			app.ctx.fillText(this.optionSound,this.width/2 - 60 , 40);
	}
	UpdateEffects()
	{
		// when button touched swap soundImg

	}
}
