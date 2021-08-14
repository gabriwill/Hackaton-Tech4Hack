
const ScoreColor= (score) =>{
    if (score <= -0.8){
        let message = "Cliente EXTREMAMENTE insatisfeito!!!!! Risco ALTO de perca de cliente, necessário solução com EXTREMA urgência!!!!"
        return 'red';
    }
    
    if (score <= -0.5 && score > -0.8){
        let message = "Cliente insatisfeito! Risco de perca de cliente, urgência de resolução do problema. "
        return 'red';
    }
    
    if (score <= -0.2 && score > -0.5){
        let message = "Cliente chateado! Necessário uma nova abordagem."
        return 'blue';
    }
    
    if (score <= 0 && score > -0.2){
    let message = "Cliente ficando chateado, melhor evitar esta abordagem."
    return 'blue';
    }
    
    if (score <= 0.2 && score > 0){
        let message = "Cliente pouco satisfeito, pode ser melhorado."
        return 'blue';
    }
    
    if (score <= 0.5 && score > 0.2){
        let message = "Cliente satisfeito, resultado quase satisfatório."
        return 'blue';
    }
    
    if (score <= 0.8 && score > 0.5){
        let message = "Cliente muito satisfeito, resultado satisfatório."
        return 'green';
    }
    
    if (score > 0.8){
        let message = "Resultado excelente, o cliente está com um nível de satisfação alto!!!"
        return 'green';
    }
    
    if (score === 1){
        let message = "Perfeito!!!"
        return 'lemongreen';
    }
}

export default ScoreColor