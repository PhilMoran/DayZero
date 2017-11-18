function menuTapControls(event) 
{
		
   //handle tap or click.
   	if(app.scenemanager.scene ==0)	//main menu
   		{
			if(event.type == 'touchstart')
			{
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -620 && event.touches[0].clientY <= app.mainmenu.height-620+60 )
				{
					app.scenemanager.scene = 3;
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -460 && event.touches[0].clientY <= app.mainmenu.height-460+60 )
				{
					app.scenemanager.scene = 2;
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -300 && event.touches[0].clientY <= app.mainmenu.height-300+60 )
				{
					app.scenemanager.scene = 1;
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -140 && event.touches[0].clientY <= app.mainmenu.height-140+60 )
				{
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
					app.scenemanager.scene = 0;
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+260 &&event.touches[0].clientY >= app.mainmenu.height/4 && event.touches[0].clientY <= app.mainmenu.height/4+40 )
				{
					//Mute Effects
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+260 &&event.touches[0].clientY >= app.mainmenu.height/2 && event.touches[0].clientY <= app.mainmenu.height/2+40 )
				{
					//Mute Music
				}
			}
		}	 
if(app.scenemanager.scene == 1)	//game Options
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= app.mainmenu.width - 130 && event.touches[0].clientX <= app.mainmenu.width - 130+100 &&event.touches[0].clientY >= app.mainmenu.height -180 &&event.touches[0].clientY <= app.mainmenu.height-180+40 )
				{
					app.scenemanager.scene = 0;
				}
				
			}
		}	 
}