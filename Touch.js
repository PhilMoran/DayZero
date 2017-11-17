function menuTapControls(event) 
{
		
   //handle tap or click.
   	if(app.scenemanager.scene ==0)
   		{
			if(event.type == 'touchstart')
			{
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -620 && event.touches[0].clientY <= app.mainmenu.height-620+60 )
				{
					app.scenemanager.scene = 1;
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -460 && event.touches[0].clientY <= app.mainmenu.height-460+60 )
				{
					app.scenemanager.scene = 2;
				}
					if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -300 && event.touches[0].clientY <= app.mainmenu.height-300+60 )
				{
					app.scenemanager.scene = 3;
				}
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -140 && event.touches[0].clientY <= app.mainmenu.height-140+60 )
				{
						app.scenemanager.scene = 4;
						console.log(app.scenemanager.scene);
				}
			}
  		}
  	if(app.scenemanager.scene == 4)
   		{
			if(event.type == 'touchstart')
			{	
				if(event.touches[0].clientX >= 100 && event.touches[0].clientX <= 100+300 &&event.touches[0].clientY >= app.mainmenu.height -120 &&event.touches[0].clientY <= app.mainmenu.height-120+60 )
				{
					app.scenemanager.scene = 0;
				}
					if(event.touches[0].clientX >= app.mainmenu.width-370 && event.touches[0].clientX <= app.mainmenu.width-370+300 &&event.touches[0].clientY >= app.mainmenu.height -120 && event.touches[0].clientY <= app.mainmenu.height-120+60 )
				{
					app.scenemanager.scene = 4;//Change To Exit
				}
			}
		}	 
}