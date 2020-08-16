//configurar express 
const port = 3003

//importa express
const express = require('express')
//instancia o express
const app = express()

//importa bodyParser 
const bodyParser = require('body-parser')

//importa o banco de dados
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded( { extended: true})) //faz um parse no body da requisicao (pra qlqr requisicao no servidor usando o express, ira obrigatriamente passar por este middleware)
                                                    //o parse transforma as requisicoes em objetos para poder acessar

//procura um produto especifico
app.get('/produtos/:id', (req,res,next) => {
    res.send(bancoDeDados.getProdutoById(req.params.id))  //params retorna o parametro da requisição
});
//cadastrar produto
app.post('/produtos', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //pega o nome atraves do corpo da requisicao
        preco: req.body.preco  
                              
    })
    res.status(202).send(produto)  //retorna JSON
})

//middleware para fazer a requisição e resposta
app.get('/produtos', (req,res,next) => {
    res.send(bancoDeDados.getProdutos()) //converte automaticamente o objeto em JSON
})

//alterar produto 
app.put('/produtos/:id', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, //pega o nome atraves do corpo da requisicao
        preco: req.body.preco  
                              
    })
    res.send(produto)  //retorna JSON
})

//delete produto 
app.delete('/produtos/:id', (req,res,next) =>{
    const produto = bancoDeDados.excluirProduto(    req.params.id)
    res.send(produto)  //retorna JSON
})

//porta que ficarei escutando
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.` )
})