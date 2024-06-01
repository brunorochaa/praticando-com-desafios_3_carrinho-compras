let valorTotal = 0;
limpar();

function adicionar() {
    // Recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];;
    let quantidadeProduto = document.getElementById('quantidade').value;

    // Validação
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0 || quantidadeProduto > 100) {
        alert("Insira uma quantidade válida!");
        return;
    }

    // Calcular o subtotal
    let subtotal = quantidadeProduto * valorUnitario;

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal}</span>
    </section>`;

    // Atualizar o valor total
    valorTotal = valorTotal + subtotal;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${valorTotal}`;

    // Limpar quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}