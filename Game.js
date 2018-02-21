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
 			app.player.Jump();
 			app.projectile.Fire();
 			
 			if(app.enemies.level === 2)
 			{
 				app.enemies.Init();
 				app.enemies.Draw();
 				app.enemies.EnemyCollision();
 			}
 			app.lives.Init();
 			app.lives.Draw();
 			app.score.Draw();
 			//console.log(app.player.sprite);
 			app.key.ObstacleCollision();
 			app.obstacles.ObstacleCollision();
 			app.projectile.BulletCollision();
 			//Draw Key card and detect collisions
 			app.key.Draw();
 			app.key.ObstacleCollision();
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
 			app.winGame.Draw();
 		}
 		if(app.scenemanager.scene ==6)	// win screen
		{
 			app.network.Draw();
 			console.log("Multiplayer");
 		}
		window.requestAnimationFrame(app.game.Update);
 	}
};
