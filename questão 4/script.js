valorProduto = Number(window.prompt('Informe o valor do produto: '))
prestacao = Number(window.prompt('O pagamento será parcelado em quantas vezes? (3 ou 5)'))

if(prestacao == 3){
    valorProduto = (10 / 100 * valorProduto) + valorProduto
    alert('Como será parcelado em 3x o valor do total do produto sofre um acréscimo de 10% resultando no total de: R$' + valorProduto + ',00')
}

if(prestacao == 5){
    valorProduto = (20 / 100 * valorProduto) + valorProduto
    alert('Como será parcelado em 3x o valor do total do produto sofre um acréscimo de 10% resultando no total de: R$' + valorProduto + ',00')
}