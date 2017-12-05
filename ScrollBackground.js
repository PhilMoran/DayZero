class ScrollBackground
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.width = app.canvas.width;
		this.height = app.canvas.height;
		this.x2 = this.width;

		this.current = new Image();
		this.next = new Image();

		this.wall = new Image();
		this.window = new Image();
		this.stairs = new Image();
		this.door = new Image();

		this.wall.src = "wall.png";
		this.window.src = "Window.png";
		this.door.src = "door.png";
		this.stairs.src = "stairs.png";

		this.current = this.door;
		this.next = this.window;
	}

	Draw()
	{
		app.ctx.drawImage(this.current,this.x--,this.y,this.width,this.height);
		app.ctx.drawImage(this.next,this.x2--,this.y,this.width,this.height);
		this.UpdateScroll();
	}
	UpdateScroll()
	{
		
		if(this.x + this.width < 0)
		{
			this.PickCurrent();
		}
		if(this.x2 + this.width < 0)
		{
			this.PickNext();
		}

	}
	PickNext()
	{
		 var rand = Math.floor((Math.random() * 4) + 1);
		 if(rand === 1)
		 {
		 	this.next = this.wall;
		 }
		 if(rand === 2)
		 {
		 	this.next = this.window;
		 }
		 if(rand === 3)
		 {
		 	this.next = this.door;
		 }
		 if(rand === 4)
		 {
		 	this.next = this.stairs;
		 }
		 this.x2 = this.width;
	}
	PickCurrent()
	{
		 var rand = Math.floor((Math.random() * 4) + 1);
		 if(rand === 1)
		 {
		 	this.current = this.wall;
		 }
		 if(rand === 2)
		 {
		 	this.current = this.window;
		 }
		 if(rand === 3)
		 {
		 	this.current = this.door;
		 }
		 if(rand === 4)
		 {
		 	this.current = this.stairs;
		 }
		 this.x = this.width;
		 console.log(rand);
	}
}