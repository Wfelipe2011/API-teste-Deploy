// req é o mesmo que um pedido RESQUEST
// res é a resposta do servidor RESPONSE
function tempo(req, res) {
  const dataAtual = new Date();

  res.json({
      date: dataAtual.toGMTString()
  })
}

export default tempo;
