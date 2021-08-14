import React, { useState, useEffect } from 'react'
import './App.css';
import InputMessage from './components/InputMessage/InputMessage';
import ListMessage from './components/ListMessage/ListMessage';



function App() {
  const [messages, setMessages]=useState([]);

  console.log("começando a conexão");

  function newMessage(message) {
    console.log(message);
    if(messages.find((msg)=> msg.msg_id===message.msg_id)) return;
    setMessages(prev=>{
      return [message,...prev]
    });
  }
  
  useEffect(()=>{
    const signalR = require("@microsoft/signalr");
    let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:7071/api")
    .build();
    connection.start()
  .then(() => console.log('connected...')).catch(console.error);
  connection.onclose(() => console.log('disconnected'));
  connection.on('new1Message', newMessage);
  },[]);

  
  
  
  console.log("terminando a conexão");
  return (
    <div>
      <InputMessage />
      <ListMessage messages={messages} />
    </div>
  );
}

export default App;
