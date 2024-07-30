const db = require('../config/db'); //importar a conexão com o banco de dados

//função para obter todas as transações
const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {

        if(err){
            console.error('Erro ao obter transações')
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    });
};


//função para adicionar uma nova transação
const addTransaction = (req, res) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err,results) => {
            if(err) {
                console.error('Erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }
            res.status(201).send('transação adicionada com sucesso');
        }
    );
};



module.exports = {
    getAllTransactions,
    addTransaction
};