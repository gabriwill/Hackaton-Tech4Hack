import React,{useState} from 'react'
import './style.css';

function InputMessage() {
  const [message, setMessage]=useState('');
  const onChangeHandler = (value)=>{
    setMessage(value)
  }
  const onClickHandler = async (e)=>{
    e.preventDefault();
    try {
      const id= Math.random().toString()
      const body = {
        msg_id: id,
        sender: "test",
        text: message
      };
      const response = await fetch('http://localhost:7071/api/messages',{
          method: 'POST',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(body)
      });
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        <input type="text" onChange={(e)=>onChangeHandler(e.target.value)} />
        <button onClick={(e)=>onClickHandler(e)}>Enviar</button>
    </div>
  );
}

export default InputMessage;