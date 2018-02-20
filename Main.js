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

	var request = new XMLHttpRequest();
	request.addEventListener("load", function requestListener(){
    //TADA! Now I have the class data.
    var data = JSON.parse(this.responseText);
    var win = data.images[0];
    var lose = data.images[1];
    var main = data.images[3];
    var sound = data.images[4];
    var win = data.images[5];
	});
	//var requestURL = 'https://github.com/PhilMoran/DayZero/blob/master/AssetLoader.JSON';
	//request.open('GET', 'https://github.com/PhilMoran/DayZero/blob/master/AssetLoader.JSON');
	//request.responseType = 'json';
	//request.send();

	app.scenemanager = new SceneManager();
	app.game = new Game();
	app.mainmenu = new MainMenu();
	app.gameOver = new GameOver();
	app.winGame = new WinGame();
	app.player = new Player();
	app.enemies = new Enemies();
	app.lives = new Lives();
	app.score = new Score();
	app.obstacles = new Obstacles();
	app.key = new passKey();
	app.scroll = new ScrollBackground();
	app.projectile = new Projectiles();
	app.particles = new Particle();
	app.network = new Network();
	
	app.scenemanager.currentScene();
	app.player.Init();
	app.projectile.Init();
	app.particles.Init();
	app.key.Init();
	app.obstacles.Init();

}


/*request.onload = function()
{
	var data = request.response;
    populateHeader(data);
    data(data);
}*/

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