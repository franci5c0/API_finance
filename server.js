//importar as bibliotecas 

const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente 

//configurar as variáveis de ambiente 

dotenv.config(); // Carrega as variáveis definidas no arquivo .env para process.env


const express = require('express'); // Importa o framework Express 
const cors = require('cors'); // Importa o pacote cors para permi r requisições de diferentes origens 
const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db'); //importar a conexão com o banco de dados

const transactionsRoutes = require('./routes/transactions'); //importa as rotas de transações

//Inicializa uma nova aplicação Express 

const app = express(); // Inicializa uma nova aplicação Express

//Configura o CORS e o body-parser 

app.use(cors()); // Habilita o CORS para todas as rotas 
app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON

//usar as rotas de transações para todas as requisições que começam com /api/transactions
app.use('./api/transactions', transactionsRoutes);

//Rota inicial para testar o servidor 

app.get('/', (req, res) => { 
    res.send('Servidor está rodando'); // Define uma rota inicial para testar o servidor 
    });

    // Configura o servidor para escutar em uma porta específica 

const PORT = process.env.PORT || 3000; // Define a porta a par r da variável de ambiente ou usa a porta 3000 como padrão 
app.listen(PORT, () => { 
console.log(`Servidor rodando na porta ${PORT}`); // Escreve uma mensagem informando que o servidor está rodando
});