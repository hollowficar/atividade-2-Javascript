function atividade_2() {
    let produto = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let dinheiro = parseFloat(prompt("Digite o valor em dinheiro entregue ao vendedor:"));

    let troco = dinheiro - preco;

    document.getElementById("resultado").innerHTML = "Você comprou um produto (" + produto + ") por R$ " + preco.toFixed(2) + " e entregou ao vendedor R$ " + dinheiro.toFixed(2) + " em dinheiro. Você vai receber R$ " + troco.toFixed(2) + " de troco. Volte sempre!";

}