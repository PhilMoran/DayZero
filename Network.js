
class Network
{
	constructor()
	{
		this.lobby = new Image();
		this.x =0;
		this.y =0;
		this.width = app.canvas.width;
		this.height = app.canvas.height;

	
	}
//called when the client receives a message
	
	Draw()
	{
		app.ctx = app.canvas.getContext("2d");
		this.lobby.src = 'Images/MultiplayerLobby.png';
		app.ctx.drawImage(this.lobby,this.x,this.y,this.width,this.height);
	}

	Create()
	{
		var ws = new WebSocket("ws://localhost:8080/wstest");
		var message={};
		ws.onopen = function() {
   		//once a connection is opened, send a request to join the game.
   			message.type="join";
			message = JSON.stringify(message);
			ws.send(message);
		};
		ws.onmessage = function (evt) {
			JSON.parse(message);
         	console.log(message);
		};

	}
}
