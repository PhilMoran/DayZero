class ScrollBackground
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.width = app.canvas.width;
		this.height = app.canvas.height/1.2;

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
	}

	Draw()
	{
		app.ctx.clearRect(this.x, this.y, this.width, this.height);
		app.ctx.drawImage(this.current,this.x--,this.y,this.width,this.height);
	}
	UpdateScroll()
	{

	}
	PickNext()
	{

	}
}