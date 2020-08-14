//configurar express 
const port = 3003

//importa express
const express = require('express')
//instancia o express
const app = express()

//primeira chamada middleware para chamar a proxima funcao 
app.get('/produtos', (req,res,next) => {
    console.log('Primeira chamada middleware')
    next()
})

//middleware para fazer a requisição e resposta
app.get('/produtos', (req,res,next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //converte automaticamente o objeto em JSON
})

//porta que ficarei escutando
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.` )
})