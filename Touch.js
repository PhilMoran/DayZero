function menuTapControls(event) 
{
		
   //handle tap or click.
   	if(app.scenemanager.scene ==0)	//main menu
   		{
			if(event.type == 'touchstart')
			{
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -620 && event.touches[0].clientY <= app.mainmenu.height-620+60 )
				{
					app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
					app.soundOptions.UpdateButton();
					app.soundOptions.UpdateMusic();
					app.scenemanager.scene = 3;

				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -460 && event.touches[0].clientY <= app.mainmenu.height-460+60 )
				{
					app.soundOptions.UpdateButton();
					app.scenemanager.scene = 2;
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -300 && event.touches[0].clientY <= app.mainmenu.height-300+60 )
				{
					app.soundOptions.UpdateButton();
					app.scenemanager.scene = 1;
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -140 && event.touches[0].clientY <= app.mainmenu.height-140+60 )
				{
					app.soundOptions.UpdateButton();
						app.scenemanager.scene = 4;
						console.log(app.scenemanager.scene);
				}
			}
  		}
  	if(app.scenemanager.scene == 4)	// game lose screen 
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - 300 && event.touches[0].clientX <= app.mainmenu.width - 100 &&event.touches[0].clientY >= app.mainmenu.height -120 &&event.touches[0].clientY <= app.mainmenu.height-120+60 )
				{
					window.close();
				}
				if(event.touches[0].clientX >= app.mainmenu.width-300 && event.touches[0].clientX <= app.mainmenu.width- 100 &&event.touches[0].clientY >= app.mainmenu.height -240 && event.touches[0].clientY <= app.mainmenu.height-240+60 )
				{
					app.soundOptions.UpdateButton();
					app.score.score = 0;
					app.lives.liveNum = 3;
					app.enemies.level = 1;
					app.obstacles.x = -200;
					app.scenemanager.scene = 0;//Change To Exit
				}
			}
		}	 
if(app.scenemanager.scene == 2)	//sound Options
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - 130 && event.touches[0].clientX <= app.mainmenu.width - 130+100 &&event.touches[0].clientY >= app.mainmenu.height -180 &&event.touches[0].clientY <= app.mainmenu.height-180+40 )
				{
					app.soundOptions.UpdateButton();
					app.scenemanager.scene = 0;
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+260 &&event.touches[0].clientY >= app.mainmenu.height/4 && event.touches[0].clientY <= app.mainmenu.height/4+40 )
				{
					//Mute Effects
					app.soundOptions.UpdateEffectImg();
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+260 &&event.touches[0].clientY >= app.mainmenu.height/2 && event.touches[0].clientY <= app.mainmenu.height/2+40 )
				{
					app.soundOptions.UpdateMusicImg();
				}
			}
		}	 
if(app.scenemanager.scene == 1)	//game Options
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - 130 && event.touches[0].clientX <= app.mainmenu.width - 130+100 &&event.touches[0].clientY >= app.mainmenu.height -180 &&event.touches[0].clientY <= app.mainmenu.height-180+40 )
				{
					app.soundOptions.UpdateButton();
					app.scenemanager.scene = 0;
				}
				if(event.touches[0].clientX >= app.gameOptions.width/2 - 100 && event.touches[0].clientX <= app.gameOptions.width/2 - 80 &&event.touches[0].clientY >= app.gameOptions.height/2 -20 &&event.touches[0].clientY <= app.gameOptions.height/2 +20 )
				{
					app.soundOptions.UpdateButton();
					app.gameOptions.DecreaseLives();
				}
				if(event.touches[0].clientX >= app.gameOptions.width/2 + 100 && event.touches[0].clientX <= app.gameOptions.width/2 + 120 &&event.touches[0].clientY >= app.gameOptions.height/2 -20 &&event.touches[0].clientY <= app.gameOptions.height/2 +20 )
				{
					app.soundOptions.UpdateButton();
					app.gameOptions.IncreaseLives();
				}
				if(event.touches[0].clientX >= app.gameOptions.width/2 - 100 && event.touches[0].clientX <= app.gameOptions.width/2 - 80 &&event.touches[0].clientY >= app.gameOptions.height/4 -10 &&event.touches[0].clientY <= app.gameOptions.height/4 +30 )
				{
					app.soundOptions.UpdateButton();
					app.gameOptions.ChangeSprite();
				}
				if(event.touches[0].clientX >= app.gameOptions.width/2 + 100 && event.touches[0].clientX <= app.gameOptions.width/2 + 120 &&event.touches[0].clientY >= app.gameOptions.height/4 -10 &&event.touches[0].clientY <= app.gameOptions.height/4 +30 )
				{
					app.soundOptions.UpdateButton();
					app.gameOptions.ChangeSprite();
				}
				
			}
		}	
if(app.scenemanager.scene == 3)	//game 
   		{
   			
   			
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - app.mainmenu.width  && event.touches[0].clientX <= app.mainmenu.width &&event.touches[0].clientY >= app.mainmenu.height - app.mainmenu.height &&event.touches[0].clientY <= app.mainmenu.height - app.mainmenu.height + 80 )
				{
					console.log("jump");
					app.soundOptions.Jump();
					app.player.TouchUp();
				}
				if(event.touches[0].clientX >= app.mainmenu.width - app.mainmenu.width  && event.touches[0].clientX <= app.mainmenu.width &&event.touches[0].clientY >= app.mainmenu.height - 80 &&event.touches[0].clientY <= app.mainmenu.height)
				{
					
					app.soundOptions.Crouch();
					app.player.crouched = true;
					app.player.Crouch();
					///app.player.TouchDown();
					console.log("CrouchState = " + app.player.crouched);
					
				}
				
				if(event.touches[0].clientX >= app.mainmenu.width - 80  && event.touches[0].clientX <= app.mainmenu.width &&event.touches[0].clientY >= app.mainmenu.height - app.mainmenu.height + 160 &&event.touches[0].clientY <= app.mainmenu.height - 160)
				{
					app.projectile.bulletNum++;
					app.projectile.alive[app.projectile.bulletNum] = true;
					app.soundOptions.Throw();
					app.player.TouchDown();
				}
				
			}
			if(event.type == 'touchend'&& app.player.crouched === true)
				{
					app.player.crouched = false;
					app.player.Crouch();
					console.log("CrouchState = " + app.player.crouched);
				}

		}
	if(app.scenemanager.scene == 5)	// game lose screen 
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - 300 && event.touches[0].clientX <= app.mainmenu.width - 100 &&event.touches[0].clientY >= app.mainmenu.height -120 &&event.touches[0].clientY <= app.mainmenu.height-120+60 )
				{
					window.close();
				}
				if(event.touches[0].clientX >= app.mainmenu.width-300 && event.touches[0].clientX <= app.mainmenu.width- 100 &&event.touches[0].clientY >= app.mainmenu.height -240 && event.touches[0].clientY <= app.mainmenu.height-240+60 )
				{
					app.soundOptions.UpdateButton();
					app.score.score = 0;
					app.lives.liveNum = 3;
					app.enemies.level = 1;
					app.obstacles.x = -200;
					app.scenemanager.scene = 0;//Change To Exit
				}
			}
		}	 	 
}