function caixaDeMercado() {
    let totalGeral = 0;
    let numProdutos = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";

    for (let i = 0; i < numProdutos; i++) {
        let nomeProduto = prompt(`Nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`));
        let valorUnitario = parseFloat(prompt(`Valor unitário de ${nomeProduto}:`));

        let valorTotalProduto = quantidade * valorUnitario;
        totalGeral += valorTotalProduto;

        recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`;

        recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}`;
        alert(recibo);


    }
        
        
}
caixaDeMercado()