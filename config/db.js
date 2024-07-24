//importar a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); //importa o pacote mysql2 para conectar ao banco de dados

 const db = mysql.createConnection({
   host:process.env.DB_HOST, //endereço do servidor do banco de dados
   user:process.env.DB_USER, //nome de usuário para acessar o banco de dados
   password:process.env.DB_PASS, //senha do usuário para acessar o banco de dados
   database:process.env.DB_NAME //nome do banco de dados
});

db.connect((err) =>{

   if (err){
        console.log('erro ao conectar ao banco de dados', err); //exibe a mensagem de erro
    return;

}

console.log('conectado ao banco de dados mysql'); //exibe a mensagem de sucesso
});

module.exports=db; //exporta a conexão para ser usada em outros arquivos

