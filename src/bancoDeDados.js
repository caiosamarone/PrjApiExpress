

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {

}

function salvarProduto (produto){
    if(!produto.id) produto.id = sequence.id   //chave ID e o valor é o proprio produto
    produtos[produto.id] = produto
    return produto
}


function getProdutoById(id){
    return produtos[id] || {}   //retorna o objeto com base no id, ou retorna um objeto vazio se o id nao existir
}

function getProdutos(){
    return Object.values(produtos)  //retorna todos valores do objeto
}

module.exports ={
    salvarProduto, getProdutos, getProdutoById   //a partir do exports, todas essas funcoes tornam visiveis para quem requerer o modulo.
}