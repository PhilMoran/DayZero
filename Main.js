app = {};

function main()
{
    //Setting values to the variables initalized 
		
	 //Creates a new canvas element 
    app.canvas = document.createElement("canvas");
    //Adds the canvas element to the document 
    document.body.appendChild(app.canvas);
    app.canvas.width = window.innerWidth;
    app.canvas.height = window.innerHeight;
    app.ctx = app.canvas.getContext("2d");

	document.addEventListener("touchend", menuTapControls, false);
	document.addEventListener("touchstart", menuTapControls, false);
	app.scenemanager = new SceneManager();
	app.game = new Game();
	app.mainmenu = new MainMenu();
	app.gameOver = new GameOver();
	app.player = new Player();
	app.enemies = new Enemies();
	app.lives = new Lives();
	app.obstacles = new Obstacles();
	app.scroll = new ScrollBackground();
	app.projectile = new Projectiles();
	
	app.scenemanager.currentScene();
	app.player.Init();
	app.projectile.Init();
	app.obstacles.Init();

}


function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}