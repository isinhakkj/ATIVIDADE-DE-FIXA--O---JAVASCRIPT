a = Number(window.prompt('Informe o primeiro valor: '))
b = Number(window.prompt('Informe o segundo valor: '))
selecao = Number(window.prompt('Escolha entre 1, 2 e 3'))

if(selecao == 1){
    res = a + b
    alert('O valor total é: ' + res)
}
if(selecao == 2){
    res = a * b
    alert('O valor total é: ' + res)
}
if(selecao == 3){
    res = a / b
    alert('O valor total é: ' + res)
}

