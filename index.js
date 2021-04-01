const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
  if(erro){
    console.log(erro)
  }else {
    console.log("conectado ao banco de dados")

    Tabelas.init(conexao)
    const app = customExpress();

    app.listen(3456, () => 
      console.log("Servidor rodando na porta 3456"))
  }
})
