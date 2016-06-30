export default function() {
  cosole.log("websocket")
  var socket = new WebSocket('ws://car-data.mybluemix.net/ws/simple');
   
   socket.onopen = function(event) {
    console.log('WebSocket onOpen: ' + event);
   };

   // Handle any errors that occur.
   socket.onerror = function(error) {
     console.log('WebSocket Error: ' + error);
   };

   // Handle messages sent by the server.
   socket.onmessage = function(event) {
   	console.log('WebSocket onmessage: ' + JSON.parse(event.data));

  console.log('WebSocket onmessage: ' + e.latitude + ' | ' + e.longitude); // {"text":"simple text"}    
    
   };

   // Show a disconnected message when the WebSocket is closed.
   socket.onclose = function(event) {
     console.log('WebSocket onclose: ' + event);    
      setTimeout(setupWS, 1000);

   };
  }