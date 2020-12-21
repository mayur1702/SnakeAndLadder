const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 5000;
const server = http.createServer(express);
const wss = new WebSocket.Server({server});

wss.on("connection", (connection) => {  
  connection.send("Connected!");
  connection.on("message", (data) => {
    wss.clients.forEach(client => {
      if(client != connection && client.readyState == WebSocket.OPEN) {
        client.send(data);
      }
    });
  })
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
