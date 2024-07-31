const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); //importar o controlador de transações

//definir uma rota para obter todas as transações
router.get('/',transactionsController.getAllTransactions);

//definindo uma rota para adicionar uma nova transação
router.post('/',transactionsController.addTransaction);

//definindo uma rota para atualizar uma transação existente(substituição completa)
router.put('/:id', transactionsController.updateTransactionPut);

//definindo uma rota para atualizar uma transação existente(substituição parcial)
router.patch('/:id', transactionsController.updateTransactionPatch);

//exportando o roteador
module.exports = router;