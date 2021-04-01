class Tabelas {
  init(conexao) {
    this.conexao = conexao

    this.criarComentario()
  }

  criarComentario() {
    const sql = 
    'CREATE TABLE IF NOT EXISTS Comentarios (id int NOT NULL AUTO_INCREMENT, data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, comentario text NOT NULL, PRIMARY KEY(id))'
  
    this.conexao.query(sql, (erro) => {
      if(erro){
        console.log(erro)
      }else {
        console.log("tabela de comentarios criada")
      }
    })
  }
}

module.exports = new Tabelas