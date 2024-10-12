//pegar o produto preenchido
//pegar a quantidade preenchida
//verificar se a quantidade é mairo que 1
//multiplica quantidade x preço
//adicionar o produto no carrinho
//pega total e soma o valor

let totalCompra;
limpar();

function adicionar(){
    let quantidade = document.getElementById('quantidade').value;

    if(quantidade>0){
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let totalProduto = valorUnitario * quantidade;
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${totalProduto}</span>
        </section>`;
        totalCompra = totalCompra + totalProduto;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalCompra}`;
        document.getElementById('quantidade').value = 0;
    } else {
        alert('A quantidade deve ser maior que zero');
    }
}

function limpar() {
    totalCompra = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}