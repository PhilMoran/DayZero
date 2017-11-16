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
		if(this.scene ==0)
		{
			app.game.Update();
			console.log("MainMenuLOADED");
		}
		if(this.scene ==1)
		{
			//Initializing the game
			app.game.Init();
			app.game.Update();
		}
		if(this.scene == 2)
		{

		}
	}
}
