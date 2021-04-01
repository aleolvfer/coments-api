const Comentario = require('../models/comentarios')

module.exports = app => {
  app.get('/comentarios', (req, res) => {
    Comentario.listaComentarios(res)
  })

  app.post('/comentarios', (req, res) => {
    const comentario = req.body
    Comentario.adiciona(comentario, res)
  })
}