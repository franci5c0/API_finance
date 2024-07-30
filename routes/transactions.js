const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); //importar o controlador de transações

//definir uma rota para obter todas as transações
router.get('/',transactionsController.getAllTransactions);

//definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransaction);

//exportando o roteador
module.exports = router;