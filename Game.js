class Game
{
 	Init()
 	{
 		console.log("Initialising game");
 		if(app.scenemanager.scene ==3)	// game 
		{
 			app.player.LoadTexture();

 		}
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
			app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height );
			app.scroll.Draw();
			app.obstacles.Draw();
 			app.player.Draw();
 			if(app.enemies.level === 2)
 			{
 				app.enemies.Init();
 				app.enemies.Draw();
 				app.enemies.EnemyCollision();
 			}
 			app.lives.Init();
 			app.lives.Draw();
 			//console.log(app.player.sprite);
 			app.obstacles.ObstacleCollision();
 			
 			//animating the player
 			app.player.Animate(deltaTime);
 			app.enemies.Animate(deltaTime);
 		}
 		if(app.scenemanager.scene ==4)	// lose sceen
		{
 			app.gameOver.Draw();
 			app.gameOver.Update();
 			//reset lives and score
 		}
 		if(app.scenemanager.scene ==5)	// win screen
		{
 			
 		}

		window.requestAnimationFrame(app.game.Update);
 	}
};
