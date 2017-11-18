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
		if(app.scenemanager.scene ==0)	// main menu
		{
			app.mainmenu.Draw();
			
		}
		if(app.scenemanager.scene ==1)	// game options
		{
 			app.gameOptions.Draw();
 		}
 		if(app.scenemanager.scene ==2)	// sound options
		{
 			app.soundOptions.Draw();
 		}
		if(app.scenemanager.scene ==3)	// game 
		{
 			app.player.Draw();
 			//animating the player
 			app.player.Animate(deltaTime);
 		}
 		if(app.scenemanager.scene ==4)	// lose sceen
		{
 			app.gameOver.Draw();
 			app.gameOver.Update();
 		}
 		if(app.scenemanager.scene ==5)	// win screen
		{
 			
 		}

		window.requestAnimationFrame(app.game.Update);
 	}
};
