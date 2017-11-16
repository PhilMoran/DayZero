class Game
{
 	Init()
 	{
 		console.log("Initialising game");
 	}
 	Update()
 	{
 		//Creating delta time
 		var now = Date.now();
		var deltaTime = (now - app.game.previousTime); 
		app.game.previousTime = now;
		//Drawing the player	
		if(app.scenemanager.scene ==0)
		{
			app.mainmenu.Draw();
		}
		if(app.scenemanager.scene ==1)
		{
 			app.player.Draw();
 			//animating the player
 			app.player.Animate(deltaTime);
 		}
		window.requestAnimationFrame(app.game.Update);
 	}
};
