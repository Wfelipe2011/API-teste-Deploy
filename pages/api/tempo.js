// req é o mesmo que um pedido RESQUEST
// res é a resposta do servidor RESPONSE
function tempo(req, res) {
  const dataAtual = new Date();
    // A vercel vai cachear a resposta. e a cada 10 segundo vai atualizar cache.
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidade')

  res.json({
      date: dataAtual.toGMTString()
  })
}

export default tempo;
