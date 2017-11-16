app = {};

function main()
{
    //Setting values to the variables initalized 
		
	 //Creates a new canvas element 
    app.canvas = document.createElement("canvas");
    //Adds the canvas element to the document 
    document.body.appendChild(app.canvas);
    app.canvas.width = 1280;
    app.canvas.height = 720;
    app.ctx = app.canvas.getContext("2d");


	app.scenemanager = new SceneManager();
	app.scenemanager.currentScene();

}


function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}