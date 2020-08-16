//configurar express 
const port = 3003

//importa express
const express = require('express')
//instancia o express
const app = express()

//importa o banco de dados
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos/:id  ', (req,res,next) => {
    res.send(bancoDeDados.getProdutoById(req.params.id))  //params retorna o parametro da requisição
});

app.post('/produtos', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name, //pega o nome atraves do corpo da requisicao
        preco: req.body.preco  
                              
    })
    res.send(produto)
})

//middleware para fazer a requisição e resposta
app.get('/produtos', (req,res,next) => {
    res.send(bancoDeDados.getProdutos()) //converte automaticamente o objeto em JSON
})

//porta que ficarei escutando
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.` )
})