const conexao = require('../infraestrutura/conexao')

class Comentario {
  adiciona(comentario, res) {
    const sql = 'INSERT INTO Comentarios SET ?'
    
    conexao.query(sql, comentario, (erro, resultados) => {
      if(erro){
        res.status(400).json(erro)
      }else {
        res.status(201).json(resultados)
      }
    })
  }

  listaComentarios(res){
    const sql = 'SELECT * FROM Comentarios'

    conexao.query(sql, (erro, resultados) => {
      if(erro){
        res.status(400).json(erro)
      }else {
        res.status(200).json(resultados)
        console.log(resultados);
      }
    })
  }
}

module.exports = new Comentario