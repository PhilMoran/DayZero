from tornado import websocket, web, ioloop, httpserver
import tornado
import json
from pprint import pprint

connections = {}
session = {}

WAITING_FOR_PLAYERS=0
GAME_IN_PROGRESS = 1
game_state = WAITING_FOR_PLAYERS

class WSHandler(tornado.websocket.WebSocketHandler):

    def check_origin(self, origin):
        return True
        
    def open(self):
        print("Connection Opened")
        print(self.request.remote_ip)
        print(self.stream.socket.getpeername()[1])
        player_address = self.request.remote_ip + str(self.stream.socket.getpeername()[1])
        connections[player_address]=self

    def on_message(self, message):
        print ('message received %s' % message)
        self.write_message(message)
        our_address = self.request.remote_ip + str(self.stream.socket.getpeername()[1]) 
        self.send_to_other_player(message)
        json.loads(message)
        if message == "updateState":
            self.send_to_other_player(message)
        if message == "join":
            print("PlayerReady")
            self.addPlayer(data,socket)

    def on_close(self):
         print ("Connection closed")
         pass

    def Join(self):
        if len(2):
            pass
            
    def send_to_other_player(self, message):
        for key, value in connections.items():
                #If it's not the socket the message came in on
            if value != self:
                value.write_message(message)

app= tornado.web.Application([
    #map the handler to the URI named "test"
    (r'/wstest', WSHandler),
])

if __name__ == '__main__':
    server_port=8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()
