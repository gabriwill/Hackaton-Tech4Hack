# Hackaton-Tech4Hack

## Criação da Aplicação
A aplicação foi criada para facilitar e auxiliar em atendimentos via chat, para que o atendendente tenha não só um feedback visual (colorido) mas também um feedback por escrito, o auxiliando a tomar decisões e mudar de atitude visando o melhor atendimento ao cliente e também o aumento da satisfação dos clientes para com o atendente, favorecendo ambos os lados.

## Objetivo da utilização da API do GOTIT
Baseadndo em uma hipotética interação cliente-vendedor, o objetivo do uso da API foi utilizar a análise dos sentimentos para gerar um feedback baseado no **score** delimitado por faixas bem definidas aos quais o retorno indica a satisfação do cliente e a necessidade de uma intervenção para que se melhore o atendimento.

## Configuração e instalação
Para utilizar esta aplicação é necessário utilizar a versão 10.x do Node.js, para realizar a instalação confira (https://github.com/nvm-sh/nvm). 
Após a instalação do Node.js, basta clonar esse diretório.
```
git clone https://github.com/renatomneto/Hackaton-Tech4Hack
```

## Como executar a aplicação
### Server
Com o node instalado, abra o terminal na pasta `src/chat/javascript` e execute o comando `npm install` para baixar as dependências necessárias. 
Após isto instale o `Azure Functions Core Tools` na sua máquina e execute o comando abaixo para executar o servidor.
``` 
func start
```
### App Client
Após instalado o Node.js, abra um terminal de sua preferencia com diretório na pasta `/client` e execute o código a seguir:
```
npm start
```
E então, no seu navegador acesse **localhost:3000**, para começar a utilização da aplicação.

## Como utilizar a aplicação
Para utilizar a aplicação, estando no navegador e tendo acessado **localhost:3000**, basta enviar qualquer frase para que a API retorne com as informações e análises prontamente, indicando o nível de satisfação do cliente e a recomendação de ação a ser tomada. 
Utilizando o **score** da API, para cada faixa específica surgirá uma mensagem de feedback e um sinalizador colorido (bloco envolvendo a mensagem), auxiliando a indicar se o cliente está satisfeito (indicador verde), neutro (indicador azul) ou insatisfeito (indicador vermelho).
