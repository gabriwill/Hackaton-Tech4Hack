import React from 'react'
import './style.css';
import ScoreColor from './../../utils/ScoreColor'

function ListMessage(props) {
  //const [messages, setMessages]=useState([]);
  const emotionStyle = (message) => {return {
    borderRadius: '5px',
    backgroundColor: ScoreColor(message.apiGotIt.sentiment.score),
  }}
  return (
    <div>
        <ul>
            {props.messages.map((message)=>{
            
            return(<li style={emotionStyle(message)} key={message.msg_id}>
              <div className="div" style={emotionStyle(message)}/>
              <p>{message.text}</p>
            </li>);
          })}
        </ul>
    </div>
  );
}

export default ListMessage;

/*
if (score <= -0.8){
	let message = "Cliente EXTREMAMENTE insatisfeito!!!!! Risco ALTO de perca de cliente, necessário solução com EXTREMA urgência!!!!"
}

if (score <= -0.5 && score > -0.8){
	let message = "Cliente insatisfeito! Risco de perca de cliente, urgência de resolução do problema. "
}

if (score <= -0.2 && score > -0.5){
	let message = "Cliente chateado! Necessário uma nova abordagem."
}

if (score <= 0 && score > -0.2){
let message = "Cliente ficando chateado, melhor evitar esta abordagem."
}

if (score <= 0.2 && score > 0){
	let message = "Cliente pouco satisfeito, pode ser melhorado."
}

if (score <= 0.5 && score > 0.2){
	let message = "Cliente satisfeito, resultado quase satisfatório."
}

if (score <= 0.8 && score > 0.5){
	let message = "Cliente muito satisfeito, resultado satisfatório."
}

if (score > 0.8){
	let message = "Resultado excelente, o cliente está com um nível de satisfação alto!!!"
}

if (score === 1){
	let message = "Perfeito!!!"
}

*/