class SceneManager
{
	constructor()
	{
		this.scene = 0;

	}
	currentScene()
	{
		app.game = new Game();
		app.mainmenu = new MainMenu();
		app.gameOver = new GameOver();
		app.soundOptions = new SoundOptions();
		app.gameOptions = new GameOptions();
		app.winGame = new WinGame();
		app.player = new Player();
		app.lives = new Lives();
		
		app.soundOptions.Init();
		
		//app.obstacles.Init();
		
		if(this.scene ==0)	// main menu
		{ 
			app.key.collect = false;
			app.game.Update();
			console.log("MainMenuLOADED");
		}
		if(this.scene ==1)	// game options
		{
			app.game.Update();
		}
		if(this.scene == 2)	// sound options
		{
			app.game.Update();
		}
		if(this.scene == 3)	// game
		{
			
			//Initializing the game
			app.game.Init();
			app.game.Update();
		}
		if(this.scene == 4)	// lose scene
		{
			app.game.Update();
		}
		if(this.scene == 5)	// win scene
		{
			app.game.Update();
		}
	}
	
}
