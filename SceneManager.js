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
		app.player = new Player();
		
		if(this.scene ==0)	// main menu
		{
			app.game.Update();
			console.log("MainMenuLOADED");
		}
		if(this.scene ==1)	// game options
		{
			
		}
		if(this.scene == 2)	// sound options
		{

		}
		if(this.scene == 3)	// game
		{
			//Initializing the game
			app.game.Init();
			app.game.Update();
		}
		if(this.scene == 4)	// lose scene
		{

		}
		if(this.scene == 5)	// win scene
		{

		}
	}
}
